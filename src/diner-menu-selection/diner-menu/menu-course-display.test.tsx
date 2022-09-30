import { render, screen } from '@testing-library/react'
import { IDish } from '../../types'
import { CourseDisplay } from './course-display'

describe('<MenuCourseDisplay />', () => {
    it('should return a message when there are no dishes selected', () => {
        // Arrange
        const courseDishes: IDish[] = []

        // Act
        render(<CourseDisplay courseDishes={courseDishes} />)

        // Assert
        const noDishesText = screen.getByText(/no dishes selected/gi)
        expect(noDishesText).toBeInTheDocument()
    })

    it('should display the name and price of the dish selected', () => {
        // Arrange
        const courseDishes: IDish[] = [{ id: 1, name: 'Icecream', price: 11 }]

        // Act
        render(<CourseDisplay courseDishes={courseDishes} />)

        // Assert
        const dishText = screen.getByText(/icecream/gi)
        const dishPrice = screen.getByText(/11/gi)
        expect(dishText).toBeInTheDocument()
        expect(dishPrice).toBeInTheDocument()
    })
})
