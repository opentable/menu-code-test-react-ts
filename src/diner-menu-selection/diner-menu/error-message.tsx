import { FC } from 'react'
import styled from 'styled-components'
import { Box } from '../../components/atoms'
import { ErrorTypes } from '../../types'

const StyledErrorBox = styled(Box)`
    color: #cd2026;
    font-weight: bold;
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

    return (
        <StyledErrorBox>
            <Box Component="p">{errorMessage}</Box>
        </StyledErrorBox>
    )
}
