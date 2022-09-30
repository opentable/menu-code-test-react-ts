import { every, isEmpty, some } from 'lodash/fp'
import { IDish, IMenu } from './types'

const isAnyListElementTrue = some((element) => element === true)
const areAllListElementsTrue = every((element) => element === true)

export const checkIfMainsIsSelected = (mains: IMenu['mains']) => {
    const isMainsSelected = !isEmpty(mains)

    return isMainsSelected
}

export const checkIfAtleastOneNonMainCourseIsSelected = (
    starters: IMenu['starters'],
    desserts: IMenu['desserts']
) => {
    const isStartersSelected = !isEmpty(starters)
    const isDessertsSelected = !isEmpty(desserts)

    const isAtleastOneNonMainsCourseSelected = isAnyListElementTrue([
        isStartersSelected,
        isDessertsSelected,
    ])

    return isAtleastOneNonMainsCourseSelected
}

const SALMON_FILLET = 7,
    PRAWN_COCKTAIL = 4,
    CHEESECAKE = 11
const checkIfSalmonFilletSelected = (dish: IDish) => {
    const isSalmonFilletSelected = dish.id === SALMON_FILLET
    return isSalmonFilletSelected
}
const checkIfPrawnCocktailSelected = (dish: IDish) => {
    const isPrawnCocktailSelected = dish.id === PRAWN_COCKTAIL
    return isPrawnCocktailSelected
}
const checkIfCheeseCakeSelected = (dish: IDish) => {
    const isCheeseCakeSelected = dish.id === CHEESECAKE
    return isCheeseCakeSelected
}

export const checkIfMisCombinationIsSelected = (
    starters: IMenu['starters'],
    mains: IMenu['mains']
) => {
    const [starter] = starters
    if (!starter) {
        return false
    }

    const [main] = mains
    const isSalmonFilletSelected = checkIfSalmonFilletSelected(main)
    const isPrawnCocktailSelected = checkIfPrawnCocktailSelected(starter)
    const isMisCobinationPresent = areAllListElementsTrue([
        isSalmonFilletSelected,
        isPrawnCocktailSelected,
    ])
    return isMisCobinationPresent
}

export const checkIfDessertIsSelected = (desserts: IMenu['desserts']) => {
    const [dessert] = desserts

    if (!dessert) {
        return false
    }

    return true
}

export const haveBothDinersSelectedCheeseCake = (
    dinerADesserts: IMenu['desserts'],
    dinerBDesserts: IMenu['desserts']
) => {
    const [dinerADessert] = dinerADesserts
    const [dinerBDessert] = dinerBDesserts
    const hasDinerASelectedCheeseCake = checkIfCheeseCakeSelected(dinerADessert)
    const hasDinerBSelectedCheeseCake = checkIfCheeseCakeSelected(dinerBDessert)

    const haveBothDinersSelectedCheesecake = areAllListElementsTrue([
        hasDinerASelectedCheeseCake,
        hasDinerBSelectedCheeseCake,
    ])
    return haveBothDinersSelectedCheesecake
}
