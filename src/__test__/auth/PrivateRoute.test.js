import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import {
    Router,
} from "react-router-dom";
import PrivateRoutes from "../../view/auth/PrivateRoutes";

describe("Check Authentation without authToken and isLogin", () => {
    beforeAll(() => {
        localStorage.removeItem("isLogin");
        localStorage.removeItem("authToken");
    });
    it("redirects to the login page", () => {
        const history = createMemoryHistory();
        render(
            <Router location={history.location} navigator={history}>
                <PrivateRoutes />
            </Router>
        );
        expect(history.location.pathname).toBe("/login");
    });

})


describe("Redirect User when it have login token and isLogin true", () => {
    beforeAll(() => {
        localStorage.setItem("authToken", "something");
        localStorage.setItem("isLogin", true);
    });

    it("redirects to the Home page", () => {
        const history = createMemoryHistory();
        render(
            <Router location={history.location} navigator={history}>
                <PrivateRoutes />
            </Router>
        );
        expect(history.location.pathname).toBe("/");
    });
});