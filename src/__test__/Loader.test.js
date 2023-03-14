import { render } from "@testing-library/react"
import App from '../App'

describe('Loader test', () => {

    test('first test', () => {
        render(<App></App>)

        expect(2).toBe(2)
    })
})