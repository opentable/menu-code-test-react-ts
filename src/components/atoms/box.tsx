import { FC, ReactNode } from 'react'

type BoxProps = {
    Component?: keyof JSX.IntrinsicElements
    children: ReactNode
    className?: string
}

export const Box: FC<BoxProps> = ({
    children,
    className = '',
    Component = 'div',
}) => {
    return <Component className={className}>{children}</Component>
}
