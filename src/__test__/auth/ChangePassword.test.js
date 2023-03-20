import { fireEvent, render as rtlRender, screen, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ChangePassword from '../../view/auth/ChangePassword'
import '@testing-library/jest-dom';
import store from '../../redux/index'
import { Provider } from 'react-redux';



const render = (component) => rtlRender(<Provider store={store}> <BrowserRouter>{component}</BrowserRouter></Provider>);
beforeAll(() => {
    localStorage.setItem('isLogin', true)
    localStorage.setItem('authToken', 'U2FsdGVkX19na0rObAEKAS6oNw+L1EppDj/cQwGUT5eKNSG6em8yqEhZYArCeJWY')
    localStorage.setItem('loginData', '["U2FsdGVkX19bKJ3y+dtFWNrEBIagU9M3CI3eVhABFSrRmtuPvT5Nyek9l7B2f8rh6pJI1JevnZWDqF+BYF7Yg7Byvu/x6Q0OY4HJnMwWmZ0OwWjGlVKv2RSHmxVf33u+4U5nfzT7PGS7Slt6FtIkuAFjc3jdGYCySJ4tFVJ+DLN0EtryQj13Jk+7j2r8HO98t4PFCjf09p2mcWu+e/j/TQ=="]')
})

describe('Change Password Page', () => {


    it('Weather all filed are avalible in document or not', async () => {
        render(<ChangePassword />)

        const passwordForm = screen.getByTestId('password-form')

        const currentPass = screen.getByTestId('current-pass')
        const newPass = screen.getByTestId('new-pass')
        const confirmPass = screen.getByTestId('confirm-pass')

        waitFor(() => {
            expect(passwordForm).toBeInTheDocument
            expect(currentPass).toBeInTheDocument
            expect(newPass).toBeInTheDocument
            expect(confirmPass).toBeInTheDocument
        })
    })

    it('Weather all input field are working or not', async () => {
        render(<ChangePassword />)

        const passwordForm = screen.getByTestId('password-form')
        const currentPass = screen.getByTestId('current-pass')
        const newPass = screen.getByTestId('new-pass')
        const confirmPass = screen.getByTestId('confirm-pass')

        fireEvent.change(currentPass, { target: { value: 'Hardik@123' } })
        fireEvent.change(newPass, { target: { value: 'Hardik@1213' } })
        fireEvent.change(confirmPass, { target: { value: 'Hardik@1213' } })

        await waitFor(() => {
            expect(currentPass.value).toBe('Hardik@123');
            expect(newPass.value).toBe('Hardik@1213');
        })
    })

})