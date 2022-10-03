import { size } from 'lodash'
import { FC } from 'react'
import styled from 'styled-components'
import { Box } from '../../components/atoms'
import { IDish } from '../../types'

const StyledBoxIndent = styled(Box)`
    text-indent: 10px;
    display: flex;
    justify-content: space-between;
`

export type CourseDisplayProps = {
    courseDishes: IDish[]
}

export const CourseDisplay: FC<CourseDisplayProps> = ({ courseDishes }) => {
    if (size(courseDishes) === 0) {
        return (
            <StyledBoxIndent
                Component="p"
                aria-label="No dishes selected"
                data-testid="no-dishes-selected"
            >
                No dishes selected yet
            </StyledBoxIndent>
        )
    }

    return (
        <Box data-testid="dishes-selected">
            {courseDishes.map((dish) => (
                <StyledBoxIndent Component="p" key={dish.id}>
                    <Box>{dish.name}</Box>
                    <Box>${dish.price}</Box>
                </StyledBoxIndent>
            ))}
        </Box>
    )
}
