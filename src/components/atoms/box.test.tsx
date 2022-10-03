import { render, screen } from '@testing-library/react'
import { Box } from './box'

describe('<Box />', () => {
    it('should render Box component with children', () => {
        // Arrange

        // Act
        render(<Box>Test</Box>)

        // Assert
        expect(screen.getByText('Test')).toBeInTheDocument()
    })

    it('should render Box component with as per Component prop', () => {
        // Arrange
        const Component = 'p'
        // Act
        render(<Box Component={Component}>Test</Box>)

        // Assert
        expect(screen.getByText('Test')).toBeInTheDocument()
        expect(
            screen.getByText(
                (_, element) => element?.tagName.toLowerCase() === 'p'
            )
        ).toBeInTheDocument()
    })
})
