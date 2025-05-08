import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';
import { getCurrentUser } from '../services/authService';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
    const navigate = useNavigate();
    const user = getCurrentUser();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="static"
            sx={{
                bgcolor: 'primary.main',
                color: 'white',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: { xs: 1, sm: 2 },
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            fontWeight: 700,
                            fontSize: { xs: '1.25rem', sm: '1.5rem' },
                            ml: 2,
                        }}
                    >
                        Skill Learn
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconButton color="inherit" size="large">
                        <NotificationsIcon />
                    </IconButton>
                    
                    {user ? (
                        <Box>
                            <IconButton
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                                size="large"
                            >
                                <AccountCircleIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                sx={{ mt: 1 }}
                            >
                                <MenuItem onClick={handleMenuClose}>
                                    <Typography variant="body2">Profile</Typography>
                                </MenuItem>
                                <MenuItem onClick={() => { handleLogout(); handleMenuClose(); }}>
                                    <Typography variant="body2">Logout</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    ) : (
                        <>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/login"
                                sx={{
                                    textTransform: 'none',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                }}
                            >
                                Login
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/register"
                                sx={{
                                    textTransform: 'none',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                }}
                            >
                                Register
                            </Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;