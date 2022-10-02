import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Box } from './box'

const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
`

type ColumnFlexBoxProps = {
    children: ReactNode
}

export const ColumnFlexBox: FC<ColumnFlexBoxProps> = ({ children }) => {
    return <StyledBox>{children}</StyledBox>
}
