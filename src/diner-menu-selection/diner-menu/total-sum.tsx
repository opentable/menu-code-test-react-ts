import { CenteredTextBox } from '../../components/atoms'
import { IMenu } from '../../types'

export type TotalSumProps = {
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
        <CenteredTextBox>
            <h4>Total price: </h4>&nbsp;
            <p>${totalSum}</p>
        </CenteredTextBox>
    )
}
