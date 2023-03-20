import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom'
import fetchReducer from "../../../redux/reducers/fetchReducer"
import { fetchProductRequest, fetchProductSuccess } from "../../../redux/actions/fetchActions"


describe('Test for Check Fetch Actions', () => {

    it("api: initial state", () => {
        const initialData = {
            loading: false,
            error: '',
            productData: [],
        }
        expect(fetchReducer(initialData, {})).toEqual(initialData);
    });

    it("api: loading state", () => {
        const initialData = {
            loading: false,
            error: '',
            productData: [],
        }

        expect(fetchReducer(initialData, fetchProductRequest())).toEqual({
            loading: true,
            error: '',
            productData: []
        });
    });
    it("api: Data fetched state", () => {
        const initialData = {
            loading: false,
            error: '',
            productData: []
        }
       const payload= [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]

        expect(fetchReducer(initialData, fetchProductSuccess(payload))).toEqual({
            loading: false,
            error: '',
            productData: payload
        });
    });

})
