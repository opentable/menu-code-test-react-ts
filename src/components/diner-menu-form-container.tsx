import Box from '@mui/material/Box'
import { FC } from 'react'
import { ErrorTypes, IMenu } from '../types'
import { MenuForm } from './menu-form'
import { MenuSelection } from './menu-selection'

type DinerMenuFormAndSelectionProps = {
    dinerTitle: string
    foodMenu: IMenu
    handleMenuSelectionForDiner: (menu: IMenu) => void
    menuSelected: IMenu
    menuError: ErrorTypes
}

export const DinerMenuFormAndSelection: FC<DinerMenuFormAndSelectionProps> = ({
    dinerTitle,
    foodMenu,
    menuError,
    menuSelected,
    handleMenuSelectionForDiner,
}) => {
    return (
        <Box component="section" width="50%">
            <Box textAlign="center" component="h2" aria-label="Diner title">
                Select menu for {dinerTitle}
            </Box>
            <Box display="flex" justifyContent="space-evenly" width="100%">
                <Box component="article" width="50%" mr="5em" ml="5em">
                    <h2>Menu</h2>
                    <MenuForm
                        foodMenu={foodMenu}
                        menuSelected={menuSelected}
                        setMenuSelected={handleMenuSelectionForDiner}
                    />
                </Box>
                <Box component="article" width="50%" mr="5em" ml="5em">
                    <MenuSelection menu={menuSelected} error={menuError} />
                </Box>
            </Box>
        </Box>
    )
}
