import { FC, useState } from 'react'
import { ErrorTypes, IMenu } from '../../types'
import { DinerMenuSelectionContainer } from '../diner-menu-selection-container'
import { validateCrossMenu, validateOwnMenu } from '../../validate-menu'
import { TotalSum } from './total-sum'
import {
    Box,
    Divider,
    EvenlySpacedFlexboxTemplate,
} from '../../components/atoms'

type DinerMenuProps = {
    foodMenu: IMenu
}

type MenuSelectedState = {
    dinerA: IMenu
    dinerB: IMenu
}

type MenuErrorState = {
    dinerA: ErrorTypes
    dinerB: ErrorTypes
}

const getErrorCode = (
    ownMenuError: ErrorTypes,
    crossMenuError: ErrorTypes
): ErrorTypes => {
    if (ownMenuError !== 'NO_ERROR') {
        return ownMenuError
    }

    if (crossMenuError !== 'NO_ERROR') {
        return crossMenuError
    }

    return 'NO_ERROR'
}

export const DinerMenu: FC<DinerMenuProps> = ({ foodMenu }) => {
    const [menuSelected, setMenuSelected] = useState<MenuSelectedState>({
        dinerA: {
            starters: [],
            mains: [],
            desserts: [],
        },
        dinerB: {
            starters: [],
            mains: [],
            desserts: [],
        },
    })
    const [menuError, setMenuError] = useState<MenuErrorState>({
        dinerA: 'NO_ERROR',
        dinerB: 'NO_ERROR',
    })

    const handleMenuSelectionForDinerA = (menuForDinerA: IMenu) => {
        const ownMenuError = validateOwnMenu(menuForDinerA)
        const crossMenuError = validateCrossMenu('A', {
            dinerAMenu: menuForDinerA,
            dinerBMenu: menuSelected.dinerB,
        })

        const error = getErrorCode(ownMenuError, crossMenuError.dinerAError)

        if (error !== 'NO_ERROR') {
            setMenuError((prevValue) => ({
                dinerA: error,
                dinerB: crossMenuError.dinerBError,
            }))

            setMenuSelected((prevValue) => ({
                dinerA: menuForDinerA,
                dinerB: prevValue.dinerB,
            }))

            return
        }

        setMenuSelected((prevValue) => ({
            dinerA: menuForDinerA,
            dinerB: prevValue.dinerB,
        }))
        setMenuError((prevValue) => ({
            dinerA: 'NO_ERROR',
            dinerB:
                prevValue.dinerB === 'NO_ERROR'
                    ? prevValue.dinerB
                    : crossMenuError.dinerBError,
        }))
    }

    const handleMenuSelectionForDinerB = (menuForDinerB: IMenu) => {
        const ownMenuError = validateOwnMenu(menuForDinerB)
        const crossMenuError = validateCrossMenu('B', {
            dinerBMenu: menuForDinerB,
            dinerAMenu: menuSelected.dinerA,
        })

        const error = getErrorCode(ownMenuError, crossMenuError.dinerBError)

        if (error !== 'NO_ERROR') {
            setMenuError((prevValue) => ({
                dinerB: error,
                dinerA: crossMenuError.dinerAError,
            }))

            setMenuSelected((prevValue) => ({
                dinerB: menuForDinerB,
                dinerA: prevValue.dinerA,
            }))

            return
        }

        setMenuSelected((prevValue) => ({
            dinerB: menuForDinerB,
            dinerA: prevValue.dinerA,
        }))
        setMenuError((prevValue) => ({
            dinerB: 'NO_ERROR',
            dinerA:
                prevValue.dinerA === 'NO_ERROR'
                    ? prevValue.dinerA
                    : crossMenuError.dinerAError,
        }))
    }

    return (
        <Box Component="section">
            <EvenlySpacedFlexboxTemplate>
                <DinerMenuSelectionContainer
                    dinerTitle="Diner A"
                    foodMenu={foodMenu}
                    menuSelected={menuSelected.dinerA}
                    menuError={menuError.dinerA}
                    handleMenuSelectionForDiner={handleMenuSelectionForDinerA}
                />
                <Divider />
                <DinerMenuSelectionContainer
                    dinerTitle="Diner B"
                    foodMenu={foodMenu}
                    menuSelected={menuSelected.dinerB}
                    menuError={menuError.dinerB}
                    handleMenuSelectionForDiner={handleMenuSelectionForDinerB}
                />
            </EvenlySpacedFlexboxTemplate>
            <Box Component="article">
                <TotalSum
                    dinerA={menuSelected.dinerA}
                    dinerB={menuSelected.dinerB}
                />
            </Box>
        </Box>
    )
}
