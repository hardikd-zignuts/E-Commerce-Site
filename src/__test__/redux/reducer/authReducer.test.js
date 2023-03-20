import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom'
import { authSetData, authSetStatus } from '../../../redux/actions/authActions'


describe('Test for Check Auth Actions', () => {

    it('should actions are called correctly for AUTH_SET_DATA', () => {
        const expectedAction = {
            type: 'AUTH_SET_DATA',
        };
        expect(authSetData()).toEqual(expectedAction);
    })
    it('should actions are called correctly for AUTH_SET_STATUS', () => {
        const expectedAction = {
            type: 'AUTH_SET_STATUS',
        };
        expect(authSetStatus()).toEqual(expectedAction);
    })

})

