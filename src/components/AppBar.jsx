import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Center,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import logo from "../assets/img/logo.png";
// import user from "../assets/img/user.png";
import { NavLink as RouteLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { toast } from "react-hot-toast";
import { messages } from "../constant/messages";
import { useEffect, useState } from "react";
import GetProfileData from "../functions/GetProfileData";
import { useSelector } from "react-redux";

const LinksText = ["Home"];

const NavLink = ({ children }) => {
  let routePath = "";
  if (children === "Home") {
    routePath = "/products";
  } else {
    routePath = children.toLowerCase();
  }
  return (
    <RouteLink
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      to={routePath}
    >
      {children}
    </RouteLink>
  );
};

export default function AppBar({ status }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentUserData, setcurrentUserData] = useState([]);
  const authTokenChanged = useSelector((state) => state.auth.authTokenChanged);

  useEffect(() => {
    setcurrentUserData(GetProfileData());
  }, [authTokenChanged]);

  const handleColorMode = () => {
    toggleColorMode();
    if (localStorage.getItem("chakra-ui-color-mode") === "light") {
      toast(messages.lightMode, {
        icon: "🌞",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        duration: 1000,
      });
    } else {
      toast(messages.darkMode, {
        icon: "🌚",
        style: {
          borderRadius: "10px",
          background: "#fff",
          color: "#333",
        },
        duration: 1000,
      });
    }
  };
  const handleLogOut = () => {
    localStorage.setItem("isLogin", false);
    localStorage.removeItem("authToken");
    toast.success(messages.logout);
  };
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <RouteLink to="/products">
              <Box>
                <img id="logo" src={logo} alt="logo" />
              </Box>
            </RouteLink>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {LinksText.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <div className="mx-2">
              <Button onClick={handleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </div>
            {status && (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://ca.slack-edge.com/T3HG71ULS-U04M1JEGZ28-fc0e656f95a1-512"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://ca.slack-edge.com/T3HG71ULS-U04M1JEGZ28-fc0e656f95a1-512"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>
                      {currentUserData &&
                        currentUserData.firstName +
                          " " +
                          currentUserData.lastName}
                    </p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <RouteLink to="profile">
                    <MenuItem>Your Profile</MenuItem>
                  </RouteLink>
                  <RouteLink to="reset">
                    <MenuItem>Change Password</MenuItem>
                  </RouteLink>
                  <RouteLink onClick={handleLogOut} to="/login">
                    <MenuItem>Logout</MenuItem>
                  </RouteLink>
                </MenuList>
              </Menu>
            )}
          </Flex>
        </Flex>

        {/* Responsive Part */}
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {LinksText.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
