import { FC, ReactNode } from 'react'

type BoxProps = {
    children: ReactNode
    className?: string
}

export const Box: FC<BoxProps> = ({ children, className }) => {
    return <div className={className}>{children}</div>
}
