import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "../actionTypes/fetchTypes"

const initialData = {
    loading: false,
    error: '',
    productData: [],
}


const fetchReducer = (state = initialData, action) => {
    switch (action.type) {

        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                productData: action.payLoad,
                error: ''
            }
        case FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                productData: [],
                error: action.payLoad
            }
        default:
            return {
                ...state
            }
    }
}

export default fetchReducer