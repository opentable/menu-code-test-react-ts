import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Box } from '.'

const StyledBox = styled(Box)`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`

type EvenlySpacedFlexboxTemplateProps = {
    children: ReactNode
}

export const EvenlySpacedFlexboxTemplate: FC<
    EvenlySpacedFlexboxTemplateProps
> = ({ children }) => {
    return <StyledBox>{children}</StyledBox>
}
