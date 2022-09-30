import { Box } from '@mui/material'
import { isEmpty } from 'lodash/fp'
import { FC } from 'react'
import { CourseType, IDish, IMenu } from '../../types'
import { CourseTable } from './course-table'

type MenuSelectionProps = {
    foodMenu: IMenu
    menuSelected: IMenu
    setMenuSelected: (foodMenu: IMenu) => void
}

type FormValueType = IDish & { isSelected: boolean }
export type FormFieldValues = {
    starters: FormValueType[]
    mains: FormValueType[]
    desserts: FormValueType[]
}

export const MenuSelection: FC<MenuSelectionProps> = ({
    foodMenu,
    menuSelected,
    setMenuSelected,
}) => {
    const handleDishSelection = (
        courseType: CourseType,
        dishSelected: IDish | {}
    ) => {
        const updatedCourseDish = isEmpty(dishSelected) ? [] : [dishSelected]

        const updatedMenu = {
            ...menuSelected,
            [courseType]: updatedCourseDish,
        }

        setMenuSelected(updatedMenu)
    }

    return (
        <Box display="flex" flexDirection="column">
            <CourseTable
                courseTitle="starters"
                courseDishes={foodMenu.starters}
                handleDishSelection={handleDishSelection}
            />

            <CourseTable
                courseTitle="mains"
                courseDishes={foodMenu.mains}
                handleDishSelection={handleDishSelection}
            />

            <CourseTable
                courseTitle="desserts"
                courseDishes={foodMenu.desserts}
                handleDishSelection={handleDishSelection}
            />
        </Box>
    )
}
