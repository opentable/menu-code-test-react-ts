import Box from '@mui/material/Box'
import { ErrorTypes, IMenu } from '../types'
import { ErrorMessage } from './diner-menu/error-message'
import { CourseDisplay } from './diner-menu/course-display'

type DishSelectedDisplayProps = {
    menu: IMenu
    error: ErrorTypes
}

export const DishSelectedDisplay = ({ menu, error }: DishSelectedDisplayProps) => {
    const { starters, mains, desserts } = menu

    return (
        <Box component="article">
            <h2>Dishes selected</h2>
            <ErrorMessage errorCode={error} />
            <Box>
                <h4>Starters:</h4>
                <CourseDisplay courseDishes={starters} />
            </Box>
            <Box>
                <h4>Mains:</h4>
                <CourseDisplay courseDishes={mains} />
            </Box>
            <Box>
                <h4>Desserts:</h4>
                <CourseDisplay courseDishes={desserts} />
            </Box>
        </Box>
    )
}
