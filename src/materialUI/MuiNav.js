import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import {Stack} from '@mui/material';
import {Link} from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from '../components/CartButtons';
import { getOnlyCategories } from '../utils/helpers';
import { useProductsContext } from '../context/products_context';
import Logo from '../components/Logo';
import {Divider} from '@mui/material';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.5),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
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
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar(){
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const {products:all_products} = useProductsContext()

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const categories = getOnlyCategories(all_products, 'category')

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return(
    <Box sx={{ flexGrow: 1}} direction='col' >
      <Stack sx={{
         display:{xs:'none', lg:'flex'},
         flexDirection:'row',
         justifyContent:'space-around',
         padding:{xs:0,md:'5px'},
         backgroundColor:'#363542',
         color:'white'
         }}
         direction='row'>
           <Box 
             component='div' 
             sx={{display:'flex', flexDirection:'row', justifyContent:'flex-start', width:{md:'30%', xl:'20%'}, marginLeft:'15px'}}>
               <Typography variant='subtitle' mr={2} sx={{paddingRight:'15px', borderRight:'2px solid #d32f2f',fontWeight:'bold',letterSpacing:'1px',cursor:'pointer'}}>
                  <Link style={{color:'white'}} to='/'>WOODS</Link>
                </Typography>            
               <Typography variant='subtitle' mr={2} sx={{paddingRight:'15px', borderRight:'2px solid #d32f2f',letterSpacing:'1px',cursor:'pointer'}}>
                  <Link to='products/kids' style={{letterSpacing:'1px',cursor:'pointer', color:'white'}}>KIDS & TODDLER</Link>
                </Typography>  
               <Typography variant='subtitle' mr={2} sx={{paddingRight:'15px',letterSpacing:'1px',cursor:'pointer'}}>
                  <Link style={{letterSpacing:'1px',cursor:'pointer', color:'white'}} to='products/office'>OFFICE</Link>
                </Typography>                                  
           </Box>
           <Box component='div'
                sx={{display:'flex', flexDirection:'row', justifyContent:'center', width:{md:'60%', xl:'70%'}, fontFamily:'Open Sans',letterSpacing:'1px'}}>
                 <Typography variant='subtitle' mr={1} sx={{textDecoration:'underline', marginRight:'15px',borderRight:'2px solid #d32f2f',paddingRight:'15px',fontSize:'16px',cursor:'pointer'}}>Office chairs starting for only $70</Typography>                     
                 <Typography variant='subtitle' mr={1} sx={{textDecoration:'underline', marginRight:'15px',borderRight:'2px solid #d32f2f',paddingRight:'15px',fontSize:'16px',cursor:'pointer'}}>No interest installments for 6 months</Typography>
                 <Typography variant='subtitle' mr={1} sx={{textDecoration:'underline', marginRight:'15px',paddingRight:'15px',fontSize:'16px',cursor:'pointer'}}>Buy luxury furniture</Typography>                                 
           </Box>
           <Box
            component='div'
            sx={{display:'flex', flexDirection:'row', width:'10%', justifyContent:'flex-end',fontFamily:'Open Sans',letterSpacing:'1px', marginRight:'10px'}}>
               <Link to='/products' style={{color:'white',textDecoration:'underline',fontWeight:'bold'}}>SHOP NOW</Link>                                              
           </Box>
      </Stack>
      <AppBar position="static" 
      sx={{
        backgroundColor: 'white',
        padding:{xs:'5px 25px', md:'20px'}
      }}>
        <Toolbar sx={{padding:{xs:0, sm:'0 16px'}}}>
          <Logo/>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            edge="start"
            color='#363542'
            aria-label="open drawer"
            onClick={handleOpenNavMenu}
            sx={{marginLeft: {xs:0, sm:'15px'}, display: { xs: 'flex', md: 'none' }}}
          >
            <MenuIcon />
          </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {links.map((link) => (
                <MenuItem key={link.id} onClick={handleCloseNavMenu} sx={{color:'black',}}>
                  <Link to={link.url} textAlign="center" style={{color:'black', fontSize:'14px'}}>{link.text}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1}}/>

          <Box sx={{marginX:{md:'10px',xl:'15px'}, display:{xs:'none', lg:'block'}}}>
            <Typography sx={{color:'black', fontSize:{lg:'12px', xl:'16px'}}}>Search Furniture</Typography>
            <Typography sx={{fontWeight:'bold',color:'black',fontSize:{lg:'10px', xl:'16px'}}}>Choose from 10000+ items </Typography>
          </Box>
          <Box sx={{backgroundColor:'white', width:'450px', marginRight:'50px', marginLeft:{ xs: '20px', lg: '0' }, display:{xs:'none', sm:'flex'}, border:'1px solid #363542', position:'relative'}}>
            <SearchIconWrapper sx={{color:'#363542'}}>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Box>     
         <Box sx={{display: { xs: 'none', md: 'flex' }, alignContent:'center', alignItems:'center' }}>
          <Box > 
            {links.map(link => (
              //const {id, url, text} = link
              <Link id={link.id} to={link.url} style={{color:'black', textDecoration:'none', fontSize:'22px',  marginRight:'5px'}}>{link.text}</Link>
             ))}
            </Box>
            <IconButton size="large" aria-label="show 0 new mails" color="black">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="#363542"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="#363542"
            >
              <AccountCircle />
            </IconButton>
         </Box>

          <CartButtons/>
          <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="#363542"
            >
              <MoreIcon />
            </IconButton>
          </Box>       
        </Toolbar>
      </AppBar>
      <Box display='flex' sx={{
         backgroundColor:'white',
         borderTop:'1px solid #363542',
         flexDirection:'row',
         justifyContent: 'space-around',
         flexWrap: 'wrap'
         }}
         direction='row'>
          {categories.map((category,i) => (        
            <Link to={`products/${category}`} style={{textTransform:'uppercase', letterSpacing:'1px', fontSize:'20px', padding:'5px', cursor:'pointer', fontWeight:'bold', color:`${i===3||i===5? '#d32f2f': '#363542'}`}}> {category} </Link>
          ))}    
      </Box>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}


/*

<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            edge="start"
            color='#363542'
            aria-label="open drawer"
            onClick={handleOpenNavMenu}
            sx={{marginLeft: {xs:0, sm:'15px'}, display: { xs: 'flex', md: 'none' }}}
          >
            <MenuIcon />
          </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          */