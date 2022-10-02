import { FC, ReactNode, useState } from 'react'
import { IMenu } from '../../types'
import { DinerMenuSelectionTemplate } from '../templates'

type DinerMenuSelectionFormProps = {
    dinerTitle: string
    menuSelectionForm: ReactNode
    dishSelectionDisplay: ReactNode
}

export const DinerMenuSelectionForm: FC<DinerMenuSelectionFormProps> = ({
    dinerTitle,
    menuSelectionForm,
    dishSelectionDisplay,
}) => {
    return (
        <DinerMenuSelectionTemplate
            dinerTitle={dinerTitle}
            menuSelectionForm={menuSelectionForm}
            dishSelectionDisplay={dishSelectionDisplay}
        />
    )
}
