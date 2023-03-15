/* The above code is testing the dark mode button. */
import React from "react";
import '@testing-library/jest-dom'
import {  render, screen } from '@testing-library/react'
import AppBar from '../components/AppBar'
import { BrowserRouter as Router } from 'react-router-dom'



describe('Navbar test', () => {

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
