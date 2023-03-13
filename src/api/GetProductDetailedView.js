import axios from "axios"


const GetProductDetailedView = async (id) => {
    return axios.get(`https://dummyjson.com/products/${id}`)
        .then(response => response.data)

}

export default GetProductDetailedView