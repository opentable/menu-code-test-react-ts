import { FC } from 'react'
import styled from 'styled-components'

type DinerTitleTextProps = {
    dinerTitle: string
}

const StyledH2 = styled.h2`
    text-align: center;
`

export const DinerTitleText: FC<DinerTitleTextProps> = ({ dinerTitle }) => {
    return <StyledH2 aria-label="Diner title">{dinerTitle}</StyledH2>
}
