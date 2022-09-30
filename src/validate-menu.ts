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
type ValidateCrossMenuFn = (input: ValidateCrossMenuInput) => ErrorTypes
export const validateCrossMenu: ValidateCrossMenuFn = cond<
    ValidateCrossMenuInput,
    ErrorTypes
>([
    [
        ({ dinerAMenu }) => !checkIfDessertIsSelected(dinerAMenu.desserts),
        constant('NO_ERROR'),
    ],
    [
        ({ dinerBMenu }) => !checkIfDessertIsSelected(dinerBMenu.desserts),
        constant('NO_ERROR'),
    ],
    [
        ({ dinerAMenu, dinerBMenu }) =>
            haveBothDinersSelectedCheeseCake(
                dinerAMenu.desserts,
                dinerBMenu.desserts
            ),
        constant('DISHES_SOLD_OUT'),
    ],
    [stubTrue, constant('NO_ERROR')],
])
