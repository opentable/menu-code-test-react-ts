import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Box } from '../atoms'

const StyledBox = styled(Box)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

type FlexibleSectionBoxProps = {
    children: ReactNode
}

export const FlexibleSectionBox: FC<FlexibleSectionBoxProps> = ({
    children,
}) => {
    return <StyledBox Component="section">{children}</StyledBox>
}
