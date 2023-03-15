import { fireEvent, render as rtlRender, screen, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import SignUpPage from '../../view/auth/SignUpPage'
import '@testing-library/jest-dom';
import store from '../../redux/index'
import { Provider } from 'react-redux';


const render = (component) =>
    rtlRender(<Provider store={store}>{component}</Provider>);


describe('Sign up Page Module', () => {

    /* Checking that all the fields are present in the document or not. */
    it('Weather all filed are avalible in document or not', async () => {
        render(
            <BrowserRouter>
                <SignUpPage />
            </BrowserRouter>
        )
        const fName = screen.getByTestId('signup-fname')
        const lName = screen.getByTestId('signup-lname')
        const email = screen.getByTestId('signup-email')
        const mobile = screen.getByTestId('signup-mobile')
        const password = screen.getByTestId('signup-password')
        const cPassword = screen.getByTestId('signup-cpassword')
        expect(fName).toBeInTheDocument();
        expect(lName).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(mobile).toBeInTheDocument();
        expect(password).toBeInTheDocument();
        expect(cPassword).toBeInTheDocument();
    })

    /* This is a test case to check that the input on change is working or not. */
    it('Check that input on change is working', async () => {

        render(
            /* BrowserRouter is a component that is used to wrap the entire application. */
            <BrowserRouter>
                <SignUpPage />
            </BrowserRouter>
        )
        const fName = screen.getByTestId('signup-fname')
        const lName = screen.getByTestId('signup-lname')
        const email = screen.getByTestId('signup-email')
        const mobile = screen.getByTestId('signup-mobile')
        const password = screen.getByTestId('signup-password')
        const cPassword = screen.getByTestId('signup-cpassword')

        fireEvent.change(fName, { target: { value: 'John' } })
        fireEvent.change(lName, { target: { value: 'Doe' } })
        fireEvent.change(email, { target: { value: 'temp@mail.com' } })
        fireEvent.change(mobile, { target: { value: '8989898989' } })
        fireEvent.change(password, { target: { value: 'Tempmail@123' } })
        fireEvent.change(cPassword, { target: { value: 'Tempmail@123' } })



    })
})
