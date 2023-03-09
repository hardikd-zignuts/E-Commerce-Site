import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import toast, { Toaster } from "react-hot-toast";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { authSetData } from "../../redux/actions/authActions";

export default function SignUpPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAlready = useSelector((state) => state.auth.isAlready);

  const notify = () => toast.error("User Already Exists");
  const initialValues = {
    firstName: "Hardik",
    lastName: "Desai",
    email: "hp636913@gmail.com",
    mobile: "6352604118",
    password: "11111111",
    cPassword: "111111111",
  };
  const onSubmit = (values) => {
    dispatch(authSetData(values));
    if (isAlready) {
      notify();
    } else {
      navigate("/products");
    }
  };

  const validate = (values) => {
    let errors = {};
    if (!values.firstName) {
      errors.firstName = "This field is required";
    }
    if (!values.email) {
      errors.email = "This field is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email";
    }
    if (!values.mobile) {
      errors.mobile = "This field is required";
    }
    if (!values.password || !values.cPassword) {
      errors.password = "This field is required";
      errors.cPassword = "This field is required";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <>
      <Toaster />

      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to view all of our cool products ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <Form onSubmit={formik.handleSubmit}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        type="text"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        type="text"
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    type="email"
                  />
                </FormControl>
                <FormControl id="mobile" isRequired>
                  <FormLabel>Mobile Number</FormLabel>
                  <Input
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    type="tel"
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    type="password"
                  />
                </FormControl>
                <FormControl id="cPassword" isRequired>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input
                    value={formik.values.cPassword}
                    onChange={formik.handleChange}
                    type="password"
                  />
                </FormControl>

                <Stack spacing={10} pt={2}>
                  <Button
                    type="submit"
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign up
                  </Button>
                </Stack>

                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user?
                    <RouteLink to="/login">Login</RouteLink>
                  </Text>
                </Stack>
              </Form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
