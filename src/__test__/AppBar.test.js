/* The above code is testing the dark mode button. */
import React from "react";
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import AppBar from '../components/AppBar'
import { BrowserRouter as Router } from 'react-router-dom'
import PrivateRoutes from '../view/auth/PrivateRoutes'



describe('Dark mode button test', () => {

    it('dark mode button is availble', async () => {
        render(
            <Router>
                <AppBar />
            </Router>
        )

        const toggleBtn = screen.getByTestId('toggle-btn')
        expect(toggleBtn).toBeInTheDocument()
    })
})

describe('Logout button test', () => {

    beforeEach(() => {
        localStorage.setItem('isLogin', true)
        localStorage.setItem('authToken', 'U2FsdGVkX19na0rObAEKAS6oNw+L1EppDj/cQwGUT5eKNSG6em8yqEhZYArCeJWY')
    })

    it('When click on logout then should be redirect to /login', async () => {
        render(
            <Router >
                <PrivateRoutes />
            </Router>
        );
        expect(window.location.pathname).toBe("/");

    })
})

describe('Dark mode button Visiblity test ', () => {

    beforeAll(() => {
        localStorage.setItem('isLogin', true);
    })

    it('dark mode button is visible or not', async () => {
        render(
            <Router>
                <AppBar status={false} />
            </Router>
        )

        waitFor(() => {
            const profileMenu = screen.getByTestId('profile-menu')
            expect(profileMenu).toBeVisible()
        })
    })
})
