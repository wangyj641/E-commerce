import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Badge, Box, IconButton } from '@mui/material'
import {
    PersonOutlined,
    ShoppingBagOutlined,
    MenuOutlined,
    SearchOutlined
} from '@mui/icons-material'

import { useNavigate } from 'react-router-dom'
import { shades } from '../../../theme'
import { setIsCartOpen } from '../../../state'

export default function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.cart)
    return (
        <Box
            display='flex'
            alignItems='center'
            width='100%'
            height='60px'
            backgroundColor='rgba(255,255,255,0.95)'
            color="black"
            position="fixed"
            top='0'
            left='0'
            zIndex='1'
        >
            <Box
                display='flex'
                alignItems='center'
                width='80%'
                margin='auto'
                justifyContent='space-between'
            >
                <Box
                    onClick={() => navigate('/')}
                    color={shades.secondary[500]}
                >
                    ECOMMER
                </Box>
                <Box
                    display='flex'
                    justifyContent='space-between'
                    columnGap='20px' j
                    zIndex='2'
                >
                    <IconButton sx={{ color: 'black' }}>
                        <SearchOutlined />
                    </IconButton>

                    <IconButton sx={{ color: 'black' }}>
                        <PersonOutlined />
                    </IconButton>
                    j
                    <Badge
                        badgeContent={cart.length}
                        color='secondary'
                        invisible={cart.length === 0}
                        sx={{
                            "& .MuiBage-badge": {
                                right: 5,
                                top: 5,
                                padding: "0 4px",
                                height: '14px',
                                minWidth: '14px'
                            }
                        }

                        }
                    >

                    </Badge>

                    <IconButton
                        onClick={() => dispatch(setIsCartOpen())}
                        sx={{ color: 'black' }}>
                        <ShoppingBagOutlined />
                    </IconButton>

                    <IconButton sx={{ color: 'black' }}>
                        <MenuOutlined />
                    </IconButton>
                </Box>
            </Box >
        </Box >
    )
}
