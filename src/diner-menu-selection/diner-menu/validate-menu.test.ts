import { ErrorTypes, IMenu } from '../../types'
import { validateOwnMenu } from './validate-menu'

describe('validateOwnMenu', () => {
    it('should check if mains dish is selected', () => {
        // Arrange
        const menuSelected: IMenu = {
            starters: [],
            mains: [],
            desserts: [],
        }
        // Act
        const result = validateOwnMenu(menuSelected)
        // Assert
        expect(result).toBe<ErrorTypes>('MAINS_REQUIRED')
    })

    it('should check if either starters or desserts dish is selected', () => {
        // Arrange
        const menuSelected: IMenu = {
            starters: [],
            mains: [{ id: 1, name: 'Pizza', price: 5 }],
            desserts: [],
        }
        // Act
        const result = validateOwnMenu(menuSelected)
        // Assert
        expect(result).toBe<ErrorTypes>('ATLEAST_ONE_NON_MAINS')
    })

    it('should check salmon fillet and prawn cocktail are selected together', () => {
        // Arrange
        const menuSelected: IMenu = {
            starters: [{ id: 4, name: 'prawn cocktail', price: 8 }],
            mains: [{ id: 7, name: 'salmon fillet', price: 4 }],
            desserts: [],
        }
        // Act
        const result = validateOwnMenu(menuSelected)
        // Assert
        expect(result).toBe<ErrorTypes>('MISCOMBINATION')
    })

    it('should return no error if all rules are satisfied', () => {
        // Arrange
        const menuSelected: IMenu = {
            starters: [{ id: 2, name: 'Bruschetta', price: 8 }],
            mains: [{ id: 1, name: 'meatballs', price: 4 }],
            desserts: [],
        }
        // Act
        const result = validateOwnMenu(menuSelected)
        // Assert
        expect(result).toBe<ErrorTypes>('NO_ERROR')
    })
})
