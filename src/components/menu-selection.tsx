import Box from '@mui/material/Box'
import { ErrorTypes, IMenu } from '../types'
import { ErrorMessage } from './diner-menu/error-message'
import { MenuCourseDisplay } from './diner-menu/menu-course-display'

type MenuSelectionProps = {
    menu: IMenu
    error: ErrorTypes
}

export const MenuSelection = ({ menu, error }: MenuSelectionProps) => {
    const { starters, mains, desserts } = menu

    return (
        <Box component="article">
            <h2>Dishes selected</h2>
            <ErrorMessage errorCode={error} />
            <Box>
                <h4>Starters:</h4>
                <MenuCourseDisplay courseDishes={starters} />
            </Box>
            <Box>
                <h4>Mains:</h4>
                <MenuCourseDisplay courseDishes={mains} />
            </Box>
            <Box>
                <h4>Desserts:</h4>
                <MenuCourseDisplay courseDishes={desserts} />
            </Box>
        </Box>
    )
}
