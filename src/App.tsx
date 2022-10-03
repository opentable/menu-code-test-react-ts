import { isEmpty } from 'lodash/fp'
import { createContext, useEffect, useState } from 'react'
import { DinerMenu } from './diner-menu-selection/diner-menu'
import { RestaurantNameHeaderBar } from './diner-menu-selection/restaurant-name-header-bar'
import { IMenu } from './types'
import { Box, CircularLoader } from './components/atoms'
import { FlexibleSectionBox } from './components/molecules'

const loadMenu = async () => {
    const response = await fetch('/api/menu')
    const menu = await response.json()
    return menu
}

const MenuLoading = () => {
    return (
        <Box>
            <RestaurantNameHeaderBar />
            <FlexibleSectionBox>
                <Box Component="article">
                    <h2>Loading Menu</h2>
                </Box>
                <CircularLoader />
            </FlexibleSectionBox>
        </Box>
    )
}

export const StoreContext = createContext<IMenu>({
    starters: [],
    mains: [],
    desserts: [],
})

function App() {
    const [foodMenu, setFoodMenu] = useState<IMenu>({} as IMenu)

    useEffect(() => {
        const startToLoadMenu = async () => {
            const menu = await loadMenu()
            setFoodMenu(menu)
        }
        startToLoadMenu()
    }, [])

    if (isEmpty(foodMenu)) {
        return <MenuLoading />
    }

    return (
        <StoreContext.Provider value={foodMenu}>
            <Box data-testid="restaurant-page-container">
                <RestaurantNameHeaderBar />
                <DinerMenu foodMenu={foodMenu} />
            </Box>
        </StoreContext.Provider>
    )
}

export default App
