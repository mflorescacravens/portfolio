import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import { Link } from 'react-router-dom';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: theme.palette.common.white,
        },
    },
  },
}))(MenuItem);

export default function HamMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
                >
                <MenuIcon />
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <Link to='/'>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <HomeIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </StyledMenuItem>
                </Link>
                <Link to='/contact'>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <ContactPhoneIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </StyledMenuItem>
                </Link>
                <Link to='/skills'>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <DeveloperModeIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Skills" />
                    </StyledMenuItem>
                </Link>
                <Link to='/projects'>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <AccountTreeIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Projects" />
                    </StyledMenuItem>
                </Link>
            </StyledMenu>
        </div>
    );
}