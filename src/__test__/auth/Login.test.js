import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import LoginPage from "../../view/auth/LoginPage"
import '@testing-library/jest-dom'

describe('Login Page Module', () => {

    it('Weather all filed are avalible in document or not', async () => {
        render(
            <BrowserRouter>
                <LoginPage />
            </BrowserRouter>
        )
        const loginEmail = screen.getByTestId('login-email')
        const loginPass = screen.getByTestId('login-password')
        expect(loginEmail).toBeInTheDocument();
        expect(loginPass).toBeInTheDocument();
    })

    it('Check that input on change is working', async () => {

        render(
            <BrowserRouter>
                <LoginPage />
            </BrowserRouter>
        )
        const loginPass = screen.getByTestId('login-password')
        const loginEmail = screen.getByTestId('login-email')


        fireEvent.change(loginEmail, { target: { value: 'temp@mail.com' } })
        fireEvent.change(loginPass, { target: { value: 'Tempmail@123' } })


        await waitFor(() => {
            expect(loginEmail.value).toBe('temp@mail.com');
            expect(loginPass.value).toBe('Tempmail@123');
        })

    })
})
