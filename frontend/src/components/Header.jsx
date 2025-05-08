import { AppBar, Toolbar, Typography, IconButton, Box, InputBase } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

function Header() {
    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{ bgcolor: 'background.paper' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconButton sx={{ color: 'primary.main' }}>
                        <SearchIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'primary.main',
                            fontWeight: 700,
                            fontSize: { xs: '1.25rem', sm: '1.5rem' },
                        }}
                    >
                        Skill Learn
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconButton sx={{ color: 'primary.main' }}>
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton sx={{ color: 'primary.main' }}>
                        <AccountCircleIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;