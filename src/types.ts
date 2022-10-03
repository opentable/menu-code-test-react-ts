export interface IDish {
    id: number
    name: string
    price: number
}

export interface IMenu {
    starters: IDish[]
    mains: IDish[]
    desserts: IDish[]
}

export type CourseType = keyof IMenu

export type ErrorTypes =
    | 'MAINS_REQUIRED'
    | 'ATLEAST_ONE_NON_MAINS'
    | 'MISCOMBINATION'
    | 'DISHES_SOLD_OUT'
    | 'NO_ERROR'
