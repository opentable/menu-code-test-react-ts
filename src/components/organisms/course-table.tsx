import { upperFirst } from 'lodash/fp'
import { FC, useState } from 'react'
import { CourseType, IDish } from '../../types'
import { RadioGroup } from '../molecules'

type CourseProps = {
    courseTitle: CourseType
    courseDishes: IDish[]
    handleDishSelection: (
        courseType: CourseType,
        dishSelected: IDish | {}
    ) => void
}

export const Course: FC<CourseProps> = ({
    courseTitle,
    courseDishes,
    handleDishSelection,
}) => {
    const [view, setView] = useState<number | null>(null)

    const handleChange = (nextView: number | null) => {
        setView(nextView)
        if (nextView === null) {
            handleDishSelection(courseTitle, {})
            return
        }
        handleDishSelection(courseTitle, courseDishes[nextView])
    }

    const formattedCourseTitle = `${upperFirst(courseTitle)}:`

    return (
        <form>
            <RadioGroup
                view={view}
                name={formattedCourseTitle}
                courseDishes={courseDishes}
                handleChange={handleChange}
            />
        </form>
    )
}
