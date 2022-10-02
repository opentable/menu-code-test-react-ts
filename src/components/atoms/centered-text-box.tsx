import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Box } from './box'

const StyledBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: baseline;
`

type CenteredTextBoxProps = {
    children: ReactNode
    Component?: keyof JSX.IntrinsicElements
}

export const CenteredTextBox: FC<CenteredTextBoxProps> = ({
    children,
    Component = 'div',
}) => {
    return <StyledBox Component={Component}>{children}</StyledBox>
}
