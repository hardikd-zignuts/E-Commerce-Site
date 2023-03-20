import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom'
import { fetchProductRequest, fetchProductFailure, fetchProductSuccess } from '../../redux/actions/fetchActions'


describe('Test for Redux actions', () => {

    it('should actions are called correctly for FETCH_PRODUCT_REQUEST', () => {
        const expectedAction = {
            type: 'FETCH_PRODUCT_REQUEST',
        };
        expect(fetchProductRequest()).toEqual(expectedAction);
    })

    it('should actions are called correctly for FETCH_PRODUCT_REQUEST', () => {
        const expectedAction = {
            type: 'FETCH_PRODUCT_SUCCESS',
        };
        expect(fetchProductSuccess()).toEqual(expectedAction);
    })

    it('should actions are called correctly for FETCH_PRODUCT_REQUEST', () => {
        const expectedAction = {
            type: 'FETCH_PRODUCT_FAILURE',
        };
        expect(fetchProductFailure()).toEqual(expectedAction);
    })

})

