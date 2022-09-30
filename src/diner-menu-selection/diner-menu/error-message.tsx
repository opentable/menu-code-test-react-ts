import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import { FC } from 'react'
import { ErrorTypes } from '../../types'

const StyledErrorBox = styled(Box)`
    &.MuiBox-root {
        color: #cd2026;
        font-weight: bold;
    }
`

const getErrorMessage = (errorCode: ErrorTypes): string => {
    const errorCodeToMessageMap: Record<ErrorTypes, string> = {
        NO_ERROR: '',
        MAINS_REQUIRED: 'Must select one mains dish',
        ATLEAST_ONE_NON_MAINS: 'Must atleast one starter or dessert',
        MISCOMBINATION:
            'Cannot select Salmon fillet and Prawn cocktail together',
        DISHES_SOLD_OUT: 'Cheesecake is sold out',
    }
    return errorCodeToMessageMap[errorCode] || ''
}

type ErrorMessageProps = {
    errorCode: ErrorTypes
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ errorCode }) => {
    const errorMessage = getErrorMessage(errorCode)

    return <StyledErrorBox component="p">{errorMessage}</StyledErrorBox>
}
