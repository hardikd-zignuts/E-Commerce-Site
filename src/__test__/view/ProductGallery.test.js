import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ProductGallery from '../../view/page/ProductGallery'
import '@testing-library/jest-dom';
import store from '../../redu-redux';
import axios from "axios";

// import { fetchProduct } from "../../redux/actions/fetchActions";
jest.mock(axios);
const MockComponent = () => {

    return (
        // <Provider store={store}>
        // <BrowserRouter>
        <ProductGallery />
        // </BrowserRouter>
        // </Provider>
    )
}

describe('Product Gallery Page', () => {

    test("renders the product when it is fetched", async () => {
        const mockProduct = { id: 1, name: "Product", images: "something" };
        const emp = fetchByID.mockImplementation(() =>
            Promise.resolve({
                data: mockProduct,
            })
        );
        console.log(emp);
        console.log(await fetchByID());
        const { debug, getByTestId } = render(
            <MockComponent />
        );
        debug();
        await waitFor(() => {
            expect(getByTestId("product")).toBeInTheDocument();
        });
    });


    // beforeAll(() => {
    //     localStorage.setItem('isLogin', true)
    //     localStorage.setItem('authToken', JSON.stringify('47HGHGDGgdHsksAPkssHhdsyjgdGH'))
    // })

    // it('Weather Products are render successfully or not', async () => {
    //     render(
    //         <MockComponent />
    //     )

    // })
})