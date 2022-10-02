import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { DinerTitleText, EvenlySpacedFlexboxTemplate } from '../atoms'

type DinerMenuSelectionTemplateProps = {
    dinerTitle: string
    menuSelectionForm: ReactNode
    dishSelectionDisplay: ReactNode
}

const StyledArticle = styled.article`
    width: 50%;
    margin-left: 5em;
    margin-right: 5em;
`

const StyledMenuSection = styled.section`
    width: 50%;
`

export const DinerMenuSelectionTemplate: FC<
    DinerMenuSelectionTemplateProps
> = ({ dinerTitle, menuSelectionForm, dishSelectionDisplay }) => {
    return (
        <StyledMenuSection>
            <DinerTitleText dinerTitle={dinerTitle} />
            <EvenlySpacedFlexboxTemplate>
                <StyledArticle>{menuSelectionForm}</StyledArticle>
                <StyledArticle>{dishSelectionDisplay}</StyledArticle>
            </EvenlySpacedFlexboxTemplate>
        </StyledMenuSection>
    )
}
