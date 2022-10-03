import { FC } from 'react'
import { ErrorTypes, IMenu } from '../types'
import { MenuSelection } from './menu-selection'
import { DishesSelected } from './dishes-selected'
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
> = ({ dinerTitle, menuError, menuSelected, handleMenuSelectionForDiner }) => {
    return (
        <DinerMenuSelectionForm
            dinerTitle={`Select menu for ${dinerTitle}`}
            menuSelectionForm={
                <>
                    <h2>Menu</h2>
                    <MenuSelection
                        menuSelected={menuSelected}
                        setMenuSelected={handleMenuSelectionForDiner}
                    />
                </>
            }
            dishSelectionDisplay={
                <DishesSelected menu={menuSelected} error={menuError} />
            }
        />
    )
}
