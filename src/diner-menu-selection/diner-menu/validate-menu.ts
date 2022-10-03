import { cond, constant, stubTrue } from 'lodash/fp'
import {
    checkIfMainsIsSelected,
    checkIfAtleastOneNonMainCourseIsSelected,
    checkIfMisCombinationIsSelected,
    checkIfDessertIsSelected,
    haveBothDinersSelectedCheeseCake,
} from '../../helpers'
import { ErrorTypes, IMenu } from '../../types'

type ValidateOwnMenuFn = (menuSelected: IMenu) => ErrorTypes
export const validateOwnMenu: ValidateOwnMenuFn = cond<IMenu, ErrorTypes>([
    [({ mains }) => !checkIfMainsIsSelected(mains), constant('MAINS_REQUIRED')],
    [
        ({ starters, desserts }) =>
            !checkIfAtleastOneNonMainCourseIsSelected(starters, desserts),
        constant('ATLEAST_ONE_NON_MAINS'),
    ],
    [
        ({ starters, mains }) =>
            checkIfMisCombinationIsSelected(starters, mains),
        constant('MISCOMBINATION'),
    ],
    [stubTrue, constant('NO_ERROR')],
])

export type ValidateCrossMenuInput = {
    dinerAMenu: IMenu
    dinerBMenu: IMenu
}
export type ValidateCrossMenuReturn = {
    dinerAError: ErrorTypes
    dinerBError: ErrorTypes
}

export const validateCrossMenu = (
    dinerName: 'A' | 'B',
    input: ValidateCrossMenuInput
) =>
    cond<ValidateCrossMenuInput, ValidateCrossMenuReturn>([
        [
            ({ dinerAMenu }) => !checkIfDessertIsSelected(dinerAMenu.desserts),
            constant({
                dinerAError: 'NO_ERROR',
                dinerBError: 'NO_ERROR',
            }),
        ],
        [
            ({ dinerBMenu }) => !checkIfDessertIsSelected(dinerBMenu.desserts),
            constant({
                dinerAError: 'NO_ERROR',
                dinerBError: 'NO_ERROR',
            }),
        ],
        [
            ({ dinerAMenu, dinerBMenu }) =>
                haveBothDinersSelectedCheeseCake(
                    dinerAMenu.desserts,
                    dinerBMenu.desserts
                ),
            constant({
                dinerAError: dinerName === 'A' ? 'DISHES_SOLD_OUT' : 'NO_ERROR',
                dinerBError: dinerName === 'B' ? 'DISHES_SOLD_OUT' : 'NO_ERROR',
            }),
        ],
        [
            stubTrue,
            constant({
                dinerAError: 'NO_ERROR',
                dinerBError: 'NO_ERROR',
            }),
        ],
    ])(input)
