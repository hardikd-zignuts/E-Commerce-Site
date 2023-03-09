import axios from "axios"
import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "../actionTypes/fetchTypes"

export const fetchProductRequest = () => {
    return {
        type: FETCH_PRODUCT_REQUEST
    }
}
export const fetchProductSuccess = (product) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payLoad: product,
    }
}
export const fetchProductFailure = error => {
    return {
        type: FETCH_PRODUCT_FAILURE,
        payLoad: error
    }
}

export const fetchProduct = () => {
    const URL = 'https://dummyjson.com/products';
    return (dispatch) => {
        dispatch(fetchProductRequest())
        axios.get(URL)
            .then(response => {
                const productData = response.data
                dispatch(fetchProductSuccess(productData))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchProductFailure(errorMsg))
            })
    }

}