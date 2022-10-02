import styled from '@emotion/styled'
import { upperFirst } from 'lodash/fp'
import { FC, useState } from 'react'
import { CourseType, IDish } from '../../types'

type CourseTableProps = {
    courseTitle: CourseType
    courseDishes: IDish[]
    handleDishSelection: (
        courseType: CourseType,
        dishSelected: IDish | {}
    ) => void
}

type RadioGroupProps = {
    view: number | null
    name: string
    courseDishes: IDish[]
    handleChange: (view: number) => void
}

const StyledLabel = styled.label`
    cursor: pointer;
    display: flex;
`

const StyledArticle = styled.article`
    width: 50%;
    display: flex;
    justify-content: space-between;
`

const RadioGroup = ({
    view,
    name,
    courseDishes,
    handleChange,
}: RadioGroupProps) => {
    return (
        <>
            <h4>{name}</h4>
            {courseDishes.map((dish, index) => (
                <div>
                    <StyledLabel>
                        <input
                            type="radio"
                            name={name}
                            checked={index === view}
                            onChange={() => handleChange(index)}
                        />
                        &nbsp;
                        <StyledArticle>
                            <span>{dish.name}</span>
                            <span>${dish.price}</span>
                        </StyledArticle>
                    </StyledLabel>
                    <br />
                </div>
            ))}
        </>
    )
}

export const CourseTable: FC<CourseTableProps> = ({
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
