import { cond, constant, stubTrue } from 'lodash/fp'
import {
    checkIfMainsIsSelected,
    checkIfAtleastOneNonMainCourseIsSelected,
    checkIfMisCombinationIsSelected,
    checkIfDessertIsSelected,
    haveBothDinersSelectedCheeseCake,
} from './helpers'
import { ErrorTypes, IMenu } from './types'

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

type ValidateCrossMenuInput = {
    dinerAMenu: IMenu
    dinerBMenu: IMenu
}
type ValidateCrossMenuReturn = {
    dinerAError: ErrorTypes
    dinerBError: ErrorTypes
}

export const validateCrossMenu = (
    dinerName: 'A' | 'B',
    input: ValidateCrossMenuInput
) =>
    cond<ValidateCrossMenuInput, ValidateCrossMenuReturn>([
        [
            ({ dinerAMenu }: Pick<ValidateCrossMenuInput, 'dinerAMenu'>) =>
                !checkIfDessertIsSelected(dinerAMenu.desserts),
            constant<ValidateCrossMenuReturn>({
                dinerAError: 'NO_ERROR',
                dinerBError: 'NO_ERROR',
            }),
        ],
        [
            ({ dinerBMenu }: Pick<ValidateCrossMenuInput, 'dinerBMenu'>) =>
                !checkIfDessertIsSelected(dinerBMenu.desserts),
            constant<ValidateCrossMenuReturn>({
                dinerAError: 'NO_ERROR',
                dinerBError: 'NO_ERROR',
            }),
        ],
        [
            ({ dinerAMenu, dinerBMenu }: ValidateCrossMenuInput) =>
                haveBothDinersSelectedCheeseCake(
                    dinerAMenu.desserts,
                    dinerBMenu.desserts
                ),
            constant<ValidateCrossMenuReturn>({
                dinerAError: dinerName === 'A' ? 'DISHES_SOLD_OUT' : 'NO_ERROR',
                dinerBError: dinerName === 'B' ? 'DISHES_SOLD_OUT' : 'NO_ERROR',
            }),
        ],
        [
            stubTrue,
            constant<ValidateCrossMenuReturn>({
                dinerAError: 'NO_ERROR',
                dinerBError: 'NO_ERROR',
            }),
        ],
    ])(input)
