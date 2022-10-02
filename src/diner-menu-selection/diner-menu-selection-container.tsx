import Box from '@mui/material/Box'
import { FC } from 'react'
import { ErrorTypes, IMenu } from '../types'
import { MenuSelection } from './menu-selection'
import { DishSelectedDisplay } from './dish-selected-display'
import { DinerMenuSelectionForm } from '../components/organisms'

type DinerMenuSelectionContainerProps = {
    dinerTitle: string
    foodMenu: IMenu
    handleMenuSelectionForDiner: (menu: IMenu) => void
    menuSelected: IMenu
    menuError: ErrorTypes
}

export const DinerMenuSelectionContainer: FC<
    DinerMenuSelectionContainerProps
> = ({
    dinerTitle,
    foodMenu,
    menuError,
    menuSelected,
    handleMenuSelectionForDiner,
}) => {
    return (
        <DinerMenuSelectionForm
            dinerTitle={`Select menu for ${dinerTitle}`}
            menuSelectionForm={
                <>
                    <h2>Menu</h2>
                    <MenuSelection
                        foodMenu={foodMenu}
                        menuSelected={menuSelected}
                        setMenuSelected={handleMenuSelectionForDiner}
                    />
                </>
            }
            dishSelectionDisplay={
                <DishSelectedDisplay menu={menuSelected} error={menuError} />
            }
        />
    )
}
