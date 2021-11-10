import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from '@mui/material/Menu';
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from '@mui/material/MenuItem';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemIcon from "@mui/material/ListItemIcon";
import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import MenuList from "./menu";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",

}));
const useStyles = makeStyles(() => ({
  IconMenu: {
    fontSize: "4rem",
    // "&:hover":{color:"red"}
  },
}));

export default function PersistentDrawerLeft(props) {
  
  console.log("Props menuSide : ",  props)
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openAvatar = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const styles = useStyles();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ backgroundColor: "#6C63FF" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 0, ...(open && { display: "none" }) }}
          >
            <MenuIcon className={styles.IconMenu} />
          </IconButton>
          <Box
            sx={{
              backgroundColor: "#6C63FF",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width:"95vw",
            }}
          >
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ fontSize: "2rem", paddingTop:1, textTransform:"uppercase"}}
            >
              Lopango Infos
            </Typography>
            
            <Stack direction="row" spacing={2} onClick={handleClick} >
              <Avatar sx={{ bgcolor: "transparent", border:"2px solid #FFF",fontSize:"1.8rem", "&:hover":{border:"2px solid #fff200", color:"#fff200", cursor: "pointer"} }}>HB</Avatar>
            </Stack>
            
            {/* <Tooltip title="Paramètres"> */}
                {/* <IconButton onClick={handleClick} size="large" sx={{ ml: 2 }}>
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                </IconButton> */}
            {/* </Tooltip> */}
          </Box>
        </Toolbar>
        <Menu
        anchorEl={anchorEl}
        open={openAvatar}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            fontSize:"1.6rem",
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem   sx={{
            fontSize:"1.6rem",}}>
          {/* <Avatar /> Profile */}
          <Stack direction="row" spacing={2}>
              <Avatar sx={{ bgcolor: "#6C63FF", fontSize:"1.6rem" }}>HB</Avatar> Profile
            </Stack>
        </MenuItem>
        <Divider />
        <MenuItem   sx={{
            fontSize:"1.6rem",}}>
          <ListItemIcon>
            <Settings fontSize="large" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem  sx={{
            fontSize:"1.6rem",}}>
          <ListItemIcon>
            <Logout fontSize="large" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <MenuIcon
                sx={{ fontSize: "3rem", color: "#6C63FF", alignSelf: "center" }}
              />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <MenuList/>
      </Drawer>
      <Main open={open} sx={{paddingTop:"2%"}}>
        {props.children}
      </Main>
    </Box>
  );
}
