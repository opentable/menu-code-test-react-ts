import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export const RestaurantNameBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography
                        variant="h4"
                        component="h4"
                        sx={{ flexGrow: 1 }}
                        align="center"
                    >
                        Big Belly Burger
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
