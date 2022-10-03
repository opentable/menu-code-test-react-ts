import styled from 'styled-components'
import { Box } from '../atoms'

export const FlexibleSectionBox = styled(Box).attrs(() => ({
    Component: 'section',
}))`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
