import { fireEvent, render as rtlRender, screen, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ProfileDetails from '../../components/common/ProfileDetails.jsx'
import '@testing-library/jest-dom';
import store from '../../redux/index'
import { Provider } from 'react-redux';



const render = (component) => rtlRender(<Provider store={store}> <BrowserRouter>{component}</BrowserRouter></Provider>);
beforeAll(() => {
    localStorage.setItem('isLogin', true)
    localStorage.setItem('authToken', 'U2FsdGVkX19na0rObAEKAS6oNw+L1EppDj/cQwGUT5eKNSG6em8yqEhZYArCeJWY')
    localStorage.setItem('loginData', '["U2FsdGVkX19bKJ3y+dtFWNrEBIagU9M3CI3eVhABFSrRmtuPvT5Nyek9l7B2f8rh6pJI1JevnZWDqF+BYF7Yg7Byvu/x6Q0OY4HJnMwWmZ0OwWjGlVKv2RSHmxVf33u+4U5nfzT7PGS7Slt6FtIkuAFjc3jdGYCySJ4tFVJ+DLN0EtryQj13Jk+7j2r8HO98t4PFCjf09p2mcWu+e/j/TQ=="]')
})

describe('Profile Deatials Page', () => {


    it('Weather all filed are avalible in document or not', async () => {
        render(<ProfileDetails />)

        const profileForm = screen.getByTestId('profile-form')

        const fName = screen.getByTestId('profile-fname')
        const lName = screen.getByTestId('profile-lname')
        const email = screen.getByTestId('profile-email')
        const mobile = screen.getByTestId('profile-mobile')

        waitFor(() => {
            expect(profileForm).toBeInTheDocument
            expect(fName).toBeInTheDocument
            expect(lName).toBeInTheDocument
            expect(mobile).toBeInTheDocument
            expect(email).toBeInTheDocument
        })
    })

    it('Weather all input field are working or not', async () => {
        render(<ProfileDetails />)

        const profileForm = screen.getByTestId('profile-form')

        const fName = screen.getByTestId('profile-fname')
        const lName = screen.getByTestId('profile-lname')
        const email = screen.getByTestId('profile-email')
        const mobile = screen.getByTestId('profile-mobile')

        fireEvent.change(fName, { target: { value: 'John' } })
        fireEvent.change(lName, { target: { value: 'Doe' } })
        fireEvent.change(email, { target: { value: 'temp@mail.com' } })
        fireEvent.change(mobile, { target: { value: '8989898989' } })

        waitFor(() => {
            expect(profileForm).toBeInTheDocument
            expect(fName).toBeInTheDocument
            expect(lName).toBeInTheDocument
            expect(mobile).toBeInTheDocument
            expect(email).toBeInTheDocument
        })
    })
})