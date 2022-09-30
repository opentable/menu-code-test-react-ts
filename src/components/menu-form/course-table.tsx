import styled from '@emotion/styled'
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { upperFirst } from 'lodash/fp'
import { FC, useState } from 'react'
import { CourseType, IDish } from '../../types'

const StyledToggleButton = styled(ToggleButton)`
    &.Mui-disabled {
        color: black;
        font-weight: bold;
    }
`

type CourseTableProps = {
    courseTitle: CourseType
    courseDishes: IDish[]
    handleDishSelection: (
        courseType: CourseType,
        dishSelected: IDish | {}
    ) => void
}

export const CourseTable: FC<CourseTableProps> = ({
    courseTitle,
    courseDishes,
    handleDishSelection,
}) => {
    const [view, setView] = useState<number | null>(null)

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        nextView: number | null
    ) => {
        setView(nextView)
        if (nextView === null) {
            handleDishSelection(courseTitle, {})
            return
        }
        handleDishSelection(courseTitle, courseDishes[nextView])
    }

    const formattedCourseTitle = `${upperFirst(courseTitle)}:`

    return (
        <Box component="article" width="100%">
            <h4>{formattedCourseTitle}</h4>
            <ToggleButtonGroup
                orientation="vertical"
                value={view}
                exclusive={true}
                onChange={handleChange}
                fullWidth={true}
            >
                <StyledToggleButton
                    value={'novalue'}
                    aria-label="Course Title Header"
                    key="nokey"
                    disabled={true}
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        width="100%"
                    >
                        <Box>Dish name</Box>
                        <Box>Dish price</Box>
                    </Box>
                </StyledToggleButton>
                {courseDishes.map((dish, index) => (
                    <ToggleButton value={index} aria-label="list" key={dish.id}>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            width="100%"
                        >
                            <Box>{dish.name}</Box>
                            <Box>{dish.price}</Box>
                        </Box>
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </Box>
    )
}
