import { ErrorTypes, IMenu } from '../../types'
import {
    validateCrossMenu,
    ValidateCrossMenuInput,
    ValidateCrossMenuReturn,
    validateOwnMenu,
} from './validate-menu'

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

describe('validateCrossMenu', () => {
    it('should return no error for diner A when dish other than cheesecake is selected', () => {
        // Arrange
        const input: ValidateCrossMenuInput = {
            dinerAMenu: {
                starters: [],
                mains: [],
                desserts: [{ id: 1, name: 'Tiramisu', price: 5 }],
            },
            dinerBMenu: {
                starters: [],
                mains: [],
                desserts: [{ id: 3, name: 'Toffee', price: 5 }],
            },
        }

        const expected: ValidateCrossMenuReturn = {
            dinerAError: 'NO_ERROR',
            dinerBError: 'NO_ERROR',
        }

        // Act
        const result = validateCrossMenu('A', input)

        // Assert
        expect(result).toEqual(expected)
    })

    it('should return no error for diner B when dish other than cheesecake is selected', () => {
        // Arrange
        const input: ValidateCrossMenuInput = {
            dinerAMenu: {
                starters: [],
                mains: [],
                desserts: [{ id: 1, name: 'Tiramisu', price: 5 }],
            },
            dinerBMenu: {
                starters: [],
                mains: [],
                desserts: [{ id: 3, name: 'Toffee', price: 5 }],
            },
        }

        const expected: ValidateCrossMenuReturn = {
            dinerAError: 'NO_ERROR',
            dinerBError: 'NO_ERROR',
        }

        // Act
        const result = validateCrossMenu('B', input)

        // Assert
        expect(result).toEqual(expected)
    })

    it('should return Dishes sold out if diner A has selected cheesecake already selected by diner B', () => {
        // Arrange
        const input: ValidateCrossMenuInput = {
            dinerAMenu: {
                starters: [],
                mains: [],
                desserts: [{ id: 11, name: 'Cheesecake', price: 5 }],
            },
            dinerBMenu: {
                starters: [],
                mains: [],
                desserts: [{ id: 11, name: 'Cheesecake', price: 5 }],
            },
        }

        const expected: ValidateCrossMenuReturn = {
            dinerAError: 'DISHES_SOLD_OUT',
            dinerBError: 'NO_ERROR',
        }

        // Act
        const result = validateCrossMenu('A', input)

        // Assert
        expect(result).toEqual(expected)
    })

    it('should return Dishes sold out if diner B has selected cheesecake already selected by diner A', () => {
        // Arrange
        const input: ValidateCrossMenuInput = {
            dinerAMenu: {
                starters: [],
                mains: [],
                desserts: [{ id: 11, name: 'Cheesecake', price: 5 }],
            },
            dinerBMenu: {
                starters: [],
                mains: [],
                desserts: [{ id: 11, name: 'Cheesecake', price: 5 }],
            },
        }

        const expected: ValidateCrossMenuReturn = {
            dinerAError: 'NO_ERROR',
            dinerBError: 'DISHES_SOLD_OUT',
        }

        // Act
        const result = validateCrossMenu('B', input)

        // Assert
        expect(result).toEqual(expected)
    })

    it('should return no error for both diners if only diner B has selected cheesecake', () => {
        // Arrange
        const input: ValidateCrossMenuInput = {
            dinerAMenu: {
                starters: [],
                mains: [],
                desserts: [{ id: 1, name: 'Tiramisu', price: 5 }],
            },
            dinerBMenu: {
                starters: [],
                mains: [],
                desserts: [{ id: 11, name: 'Cheesecake', price: 5 }],
            },
        }

        const expected: ValidateCrossMenuReturn = {
            dinerAError: 'NO_ERROR',
            dinerBError: 'NO_ERROR',
        }

        // Act
        const result = validateCrossMenu('A', input)

        // Assert
        expect(result).toEqual(expected)
    })
})
