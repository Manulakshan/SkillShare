import { 
    AppBar, 
    Toolbar, 
    Typography, 
    IconButton, 
    InputBase,
    Badge,
    Avatar,
    Box
  } from '@mui/material';
  import { 
    Search as SearchIcon, 
    Notifications as NotificationsIcon,
    Menu as MenuIcon
  } from '@mui/icons-material';
  import { styled, alpha } from '@mui/material/styles';
  
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  
  function Header() {
    return (
      <AppBar 
        position="static" 
        sx={{ 
          backgroundColor: 'primary.main',
          color: 'common.white',
          boxShadow: 'none',
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Toolbar>
          {/* Left: Menu Icon (for mobile) */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
  
          {/* App Name/Logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ 
              display: { xs: 'none', sm: 'block' },
              fontWeight: 700,
              letterSpacing: '0.05rem'
            }}
          >
            SkillConnect
          </Typography>
  
          {/* Search Bar */}
          <Search sx={{ mx: 2, flexGrow: { xs: 1, sm: 0.5 } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search skills..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
  
          <Box sx={{ flexGrow: 1 }} />
  
          {/* Navigation Links - Center (hidden on mobile) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Typography variant="subtitle1" sx={{ cursor: 'pointer', '&:hover': { opacity: 0.8 } }}>
              Home
            </Typography>
            <Typography variant="subtitle1" sx={{ cursor: 'pointer', '&:hover': { opacity: 0.8 } }}>
              Learning
            </Typography>
            <Typography variant="subtitle1" sx={{ cursor: 'pointer', '&:hover': { opacity: 0.8 } }}>
              Community
            </Typography>
          </Box>
  
          <Box sx={{ flexGrow: 1 }} />
  
          {/* Right: Icons */}
          <Box sx={{ display: 'flex' }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <Avatar 
                sx={{ width: 32, height: 32 }} 
                src="/static/images/avatar/1.jpg" 
                alt="User Avatar"
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Header;