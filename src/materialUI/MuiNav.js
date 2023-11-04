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
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button, Stack} from '@mui/material';
import {Link} from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from '../components/CartButtons';
import { getOnlyCategories } from '../utils/helpers';
import { useProductsContext } from '../context/products_context';
import Logo from '../components/Logo';
import Divider from '@mui/material/Divider';


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

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const {products:all_products} = useProductsContext()

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const categories = getOnlyCategories(all_products, 'category')

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
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
  return (
    <Box sx={{ flexGrow: 1}} direction='col' >
      <Stack sx={{
         display:'flex',
         flexDirection:'row',
         justifyContent:'space-between',
         padding:'16px',
         backgroundColor:'#363542',
         color:'white'
         }}
         direction='row'>
           <Box display='flex' sx={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
               <Box><Typography variant='subtitle'>WOODS</Typography></Box>
               <Divider orientation="vertical" flexItem sx={{color:'white'}}/>
               <Box><Typography variant='subtitle'>WOODS</Typography></Box>           
           </Box>
           <Box display='flex' direction='row'>
             <Typography variant='subtitle'>WOODS</Typography>
               <Divider orientation="vertical" flexItem sx={{color:'white'}}/>
             <Typography variant='subtitle'>WOODS</Typography>
           </Box>
           <Box display='flex' direction='row'>
             <Typography variant='subtitle'>WOODS</Typography>
               <Divider orientation="vertical" flexItem sx={{color:'white'}}/>
             <Typography variant='subtitle'>WOODS</Typography>
           </Box>
      </Stack>
      <AppBar position="static" sx={{
      //  backgroundColor: 'hsl(22, 31%, 52%)',
        backgroundColor: 'white',
        padding:'20px'
      }}>
        <Toolbar>
          <Logo/>
        { /* <IconButton
            size="large"
            edge="start"
            color='inherit'
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>*/
        }
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1}}/>
         
          <Box sx={{display: { xs: 'none', md: 'flex' }, alignContent:'center', alignItems:'center' }}>
          <Box > 
            {links.map(link => (
              //const {id, url, text} = link
              <Link id={link.id} to={link.url} style={{color:'black', textDecoration:'none', fontSize:'20px', marginRight:'5px'}}>{link.text} </Link>
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
              color="black"
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
              color="black"
            >
              <AccountCircle />
            </IconButton>
          </Box>

          <CartButtons/>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="black"
            >
              <MoreIcon />
            </IconButton>
          </Box>
         
        </Toolbar>
      </AppBar>
      <Box display='flex' p={3} sx={{
         backgroundColor:'white',
         borderTop:'2px solid black',
         flexDirection:'row',
         justifyContent: 'space-around',
         flexWrap: 'wrap'
         }}
         direction='row'>
          {categories.map(category => (
              <Typography variant='subtitle1' color='black' sx={{textTransform:'uppercase', cursor:'pointer'}}>{category}</Typography>
          ))}
           {/*<Typography variant='subtitle1' color='black' sx={{textTransform:'uppercase', marginRight:'35px', cursor:'pointer'}}>home furniture</Typography>
           <Typography variant='subtitle1' color='black' sx={{textTransform:'uppercase', marginRight:'35px', cursor:'pointer'}}>office furniture</Typography>
           <Typography variant='subtitle1' color='black' sx={{textTransform:'uppercase', marginRight:'35px', cursor:'pointer'}}>sofa</Typography>
           <Typography variant='subtitle1' color='black' sx={{textTransform:'uppercase', marginRight:'35px', cursor:'pointer'}}>bedding</Typography>
           <Typography variant='subtitle1' color='black' sx={{textTransform:'uppercase', marginRight:'35px', cursor:'pointer'}}>matresses</Typography>
           <Typography variant='subtitle1' color='black' sx={{textTransform:'uppercase', marginRight:'35px', cursor:'pointer'}}>baby & toddler</Typography>
           <Typography variant='subtitle1' color='black' sx={{textTransform:'uppercase', marginRight:'35px', cursor:'pointer'}}>kids</Typography>
           <Typography variant='subtitle1' color='black' sx={{textTransform:'uppercase', marginRight:'35px', cursor:'pointer'}}>chairs</Typography>
           <Typography variant='subtitle1' color='black' sx={{textTransform:'uppercase', marginRight:'35px', cursor:'pointer'}}>Bathroom</Typography>
           <Typography variant='subtitle1' color='black' sx={{textTransform:'uppercase', marginRight:'35px', cursor:'pointer', color:'hsl(22, 31%, 52%)'}}>lighting</Typography>
           <Typography variant='subtitle1' color='black' sx={{textTransform:'uppercase', marginRight:'35px', cursor:'pointer'}}>rugs</Typography>
           <Typography variant='subtitle1' color='black' sx={{textTransform:'uppercase', marginRight:'35px', cursor:'pointer', color:'hsl(22, 31%, 52%)'}}>decor</Typography>*/}
      </Box>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
