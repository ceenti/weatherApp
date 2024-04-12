import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha, AppBar, Box, Toolbar, IconButton, Typography, InputBase } from '@material-ui/core';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, .5),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifySelf: 'left',
  color: 'gray'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  border: '1px solid #B1B2BE',
  borderRadius: '0.1875rem',
  '& .MuiInputBase-input': {
    borderColor: "#C3C4CD",
    padding: theme.spacing(1, 1, 1, 4),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const StyledAppBar = styled('header')(({ theme }) => ({
  background: "#EDEEF6"
}));

const StyledToolBar = styled('div')(({theme}) => ({
  justifyContent: 'space-between',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  minHeight: '4rem',
  marginInline: '1rem'
}))

export default function SearchAppBar() {
  return (
    <Box p={0} m={0} sx={{ flexGrow: 1 }}>
      <StyledAppBar>
        <StyledToolBar>
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            WEATHER
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </StyledToolBar>
      </StyledAppBar>
    </Box>
  );
}
