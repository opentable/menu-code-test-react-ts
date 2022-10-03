import { render, screen } from '@testing-library/react'
import { TotalSum, TotalSumProps } from './total-sum'

describe('<TotalSum />', () => {
    it('should return total sum of selected dishes', () => {
        // Arrange
        const inputProps: TotalSumProps = {
            dinerA: {
                starters: [{ id: 1, name: 'Soup', price: 3 }],
                mains: [{ id: 3, name: 'Steak', price: 5 }],
                desserts: [{ id: 6, name: 'Tiramisu', price: 10 }],
            },
            dinerB: {
                starters: [{ id: 1, name: 'Soup', price: 2 }],
                mains: [{ id: 4, name: 'Steak', price: 1 }],
                desserts: [{ id: 11, name: 'Cheesecake', price: 6 }],
            },
        }
        const expectedText = '$27'

        // Act
        render(<TotalSum {...inputProps} />)

        // Assert
        expect(screen.getByText(expectedText)).toBeInTheDocument()
    })
})
