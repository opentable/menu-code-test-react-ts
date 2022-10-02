import styled from 'styled-components'
import { IDish } from '../../types'

type RadioGroupProps = {
    view: number | null
    name: string
    courseDishes: IDish[]
    handleChange: (view: number) => void
}

const StyledLabel = styled.label`
    cursor: pointer;
    display: flex;
`

const StyledArticle = styled.article`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const RadioGroup = ({
    view,
    name,
    courseDishes,
    handleChange,
}: RadioGroupProps) => {
    return (
        <>
            <h4>{name}</h4>
            {courseDishes.map((dish, index) => (
                <div>
                    <StyledLabel>
                        <input
                            type="radio"
                            name={name}
                            checked={index === view}
                            onChange={() => handleChange(index)}
                        />
                        &nbsp;
                        <StyledArticle>
                            <span>{dish.name}</span>
                            <span>${dish.price}</span>
                        </StyledArticle>
                    </StyledLabel>
                    <br />
                </div>
            ))}
        </>
    )
}
