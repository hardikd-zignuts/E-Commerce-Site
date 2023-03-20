import { useDispatch } from "react-redux"
import GetProductDetailedView from "../../api/GetProductDetailedView"
import { fetchProduct } from "../../redux/actions/fetchActions"


describe('Product data details', () => {

    test('Check whater data fetched by id or not', async () => {
        const productData = await GetProductDetailedView(10)
        expect(productData.title).toEqual('HP Pavilion 15-DK1056WM')
    })

})
