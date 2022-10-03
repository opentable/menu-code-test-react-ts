import { render, screen } from '@testing-library/react'
import { CourseDisplay, CourseDisplayProps } from './course-display'

describe('<CourseDisplay />', () => {
    it('should return no dishes selected message if there are no dishes selected', async () => {
        // Arrange
        const inputProps: CourseDisplayProps = {
            courseDishes: [],
        }

        // Act
        render(<CourseDisplay {...inputProps} />)
        // Assert

        expect(screen.getByTestId('no-dishes-selected')).toBeInTheDocument()
    })

    it('should return dishes selected', async () => {
        // Arrange
        const inputProps: CourseDisplayProps = {
            courseDishes: [{ id: 1, name: 'Tiramisu', price: 6 }],
        }

        // Act
        render(<CourseDisplay {...inputProps} />)
        // Assert

        expect(screen.getByTestId('dishes-selected')).toBeInTheDocument()
        expect(
            screen.queryByTestId('no-dishes-selected')
        ).not.toBeInTheDocument()
    })
})
