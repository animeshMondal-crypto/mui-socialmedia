import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Stack,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
} from "@mui/material";
import { CodeOff, Email, Notifications } from "@mui/icons-material";
import { useState } from "react";
import ListItems from "./ListItems";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledSearch = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  color: "text.primary",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const IconContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
}));

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [drawer, setDrawer] = useState(false);
  return (
    <AppBar position={"sticky"}>
      <StyledToolbar>
        <Stack
          direction={"row"}
          sx={{ cursor: "pointer", alignItems: "center", gap: "10px" }}
        >
          <IconButton
            sx={{ display: { sm: "block", md: "none" } }}
            onClick={(e) => setDrawer(true)}
          >
            <CodeOff color="white" />
          </IconButton>
          <Typography variant={"h6"}>SOCIOPEDIA</Typography>
        </Stack>
        <Drawer
          open={drawer}
          sx={{ width: "40%" }}
          onClose={(e) => setDrawer(false)}
        >
          <ListItems />
        </Drawer>
        <StyledSearch sx={{ display: { xs: "none", sm: "block" } }}>
          <InputBase placeholder="search items..." />
        </StyledSearch>
        <IconContainer>
          <Badge badgeContent={4} color={"error"}>
            <Email />
          </Badge>
          <Badge badgeContent={2} color={"error"}>
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            src="/broken-image.jpg"
            onClick={(e) => setMenu(true)}
          />
        </IconContainer>
      </StyledToolbar>
      <Menu
        open={menu}
        onClose={(e) => setMenu(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
