import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { DinerTitleText, EvenlySpacedFlexbox } from '../atoms'

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
            <EvenlySpacedFlexbox>
                <StyledArticle>{menuSelectionForm}</StyledArticle>
                <StyledArticle>{dishSelectionDisplay}</StyledArticle>
            </EvenlySpacedFlexbox>
        </StyledMenuSection>
    )
}
