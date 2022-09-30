import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import { size } from 'lodash'
import { FC } from 'react'
import { IDish } from '../../types'

const StyledBoxIndent = styled(Box)`
    &.MuiBox-root {
        text-indent: 10px;
    }
`

type MenuCourseDisplayProps = {
    courseDishes: IDish[]
}

export const MenuCourseDisplay: FC<MenuCourseDisplayProps> = ({
    courseDishes,
}) => {
    if (size(courseDishes) === 0) {
        return (
            <StyledBoxIndent component="p">
                No dishes selected yet
            </StyledBoxIndent>
        )
    }

    return (
        <Box>
            {courseDishes.map((dish) => (
                <StyledBoxIndent
                    component="p"
                    key={dish.id}
                    display="flex"
                    justifyContent="space-between"
                >
                    <Box>{dish.name}</Box>
                    <Box>${dish.price}</Box>
                </StyledBoxIndent>
            ))}
        </Box>
    )
}
