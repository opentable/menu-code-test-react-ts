import { act, render, screen, waitFor } from '@testing-library/react'
import App from './App'
import { IMenu } from './types'

function setupFetchStub(data: any) {
    return function fetchStub(url: RequestInfo | URL): Promise<Response> {
        return new Promise((resolve) =>
            // @ts-ignore
            resolve({ json: () => Promise.resolve(data) })
        )
    }
}

describe('<App />', () => {
    it('should return loading when there is no menu loaded', async () => {
        // Arrange
        const mockFetchData = {}

        jest.spyOn(global, 'fetch').mockImplementation(
            setupFetchStub(mockFetchData)
        )

        // Act
        render(<App />)

        // Assert
        await act(async () => {
            expect(screen.getByText(/loading menu/i)).toBeInTheDocument()
        })
        await act(async () => {
            expect(
                screen.queryByTestId('restaurant-page-container')
            ).not.toBeInTheDocument()
        })
    })

    it('should return restaurant page components when menu is loaded', async () => {
        // Arrange
        const mockFetchData = { starters: [], mains: [], desserts: [] } as IMenu

        jest.spyOn(global, 'fetch').mockImplementation(
            setupFetchStub(mockFetchData)
        )

        // Act
        render(<App />)

        // Assert
        await act(async () => {
            expect(screen.getByText(/loading menu/i)).toBeInTheDocument()
        })
        await act(async () => {
            expect(
                screen.getByTestId('restaurant-page-container')
            ).toBeInTheDocument()
        })
    })
})
