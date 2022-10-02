import { isEmpty } from 'lodash/fp'
import { FC, useContext } from 'react'
import { StoreContext } from '../../App'
import { ColumnFlexBox } from '../../components/atoms'
import { CourseTable } from '../../components/organisms'
import { CourseType, IDish, IMenu } from '../../types'

type MenuSelectionProps = {
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
    menuSelected,
    setMenuSelected,
}) => {
    const foodMenu = useContext(StoreContext)
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
        <ColumnFlexBox>
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
        </ColumnFlexBox>
    )
}
