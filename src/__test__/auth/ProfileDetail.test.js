import { fireEvent, render as rtlRender, screen, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ProfileDetails from '../../components/common/ProfileDetails.jsx'
import '@testing-library/jest-dom';
import store from '../../redux/index'
import { Provider } from 'react-redux';

const render = (component) =>
    rtlRender(<Provider store={store}>{component}</Provider>);

describe('Profile Deatials Page', () => {

    beforeAll(() => {
        localStorage.setItem('isLogin', true)
        localStorage.setItem('authToken', JSON.stringify('47HGHGDGgdHsksAPkssHhdsyjgdGH'))
    })

    it('Weather all filed are avalible in document or not', async () => {
        render(
            <BrowserRouter>
                <ProfileDetails />
            </BrowserRouter>
        )

        const profileForm = screen.getByRole('form')
        // const fName = screen.getByTestId('profile-fname')
        // const lName = screen.getByTestId('profile-lname')
        // const email = screen.getByTestId('profile-email')
        // const mobile = screen.getByTestId('profile-mobile')

        // await waitFor(() => {
        //     expect(fName).toBeInTheDocument();
        //     expect(lName).toBeInTheDocument();
        //     expect(email).toBeInTheDocument();
        //     expect(mobile).toBeInTheDocument();
        // })

    })
})