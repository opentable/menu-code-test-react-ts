import { Box } from '@mui/material'
import { isEmpty } from 'lodash/fp'
import { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { DinerMenu } from './diner-menu-selection/diner-menu'
import { RestaurantNameHeaderBar } from './diner-menu-selection/restaurant-name-header-bar'
import { IMenu } from './types'

const loadMenu = async () => {
    const response = await fetch('/api/menu')
    const menu = await response.json()
    return menu
}

const MenuLoading = () => {
    return (
        <Box>
            <RestaurantNameHeaderBar />
            <Box
                component="section"
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
            >
                <Box component="article">
                    <h2>Loading Menu</h2>
                </Box>
                <CircularProgress />
            </Box>
        </Box>
    )
}

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
        <Box>
            <RestaurantNameHeaderBar />
            <DinerMenu foodMenu={foodMenu} />
        </Box>
    )
}

export default App
