import { FC } from 'react'
import styled from 'styled-components'
import { Box } from './box'

const StyledVerticalBox = styled(Box)`
    border: 1px solid grey;
    display: inline-flex;
`

export const Divider = () => {
    return <StyledVerticalBox />
}
