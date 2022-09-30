import Box from '@mui/material/Box'
import { IMenu } from '../../types'

type TotalSumProps = {
    dinerA: IMenu
    dinerB: IMenu
}

export const TotalSum = ({ dinerA, dinerB }: TotalSumProps) => {
    const { starters: startersA, mains: mainsA, desserts: dessertsA } = dinerA
    const { starters: startersB, mains: mainsB, desserts: dessertsB } = dinerB

    const allDishes = [
        ...startersA,
        ...startersB,
        ...mainsA,
        ...mainsB,
        ...dessertsA,
        ...dessertsB,
    ]

    const totalSum = allDishes.reduce((acc, dish) => acc + dish.price, 0)

    return (
        <Box
            component="h2"
            display="flex"
            justifyContent="center"
            alignItems="baseline"
        >
            <h4>Total price: </h4>&nbsp;
            <p>${totalSum}</p>
        </Box>
    )
}
