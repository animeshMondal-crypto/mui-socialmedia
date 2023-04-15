import { Brightness6 } from "@mui/icons-material";
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Switch,
} from "@mui/material";
import ListItems from "./ListItems";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const LeftBar = ({ mode, setMode }) => {
  return (
    <StyledBox flex={1} p={4}>
      <Box position={"fixed"}>
        <ListItems />
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="#"
            onClick={() =>
              mode === "light" ? setMode("dark") : setMode("light")
            }
          >
            <ListItemIcon>
              <Brightness6 />
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </ListItem>
      </Box>
    </StyledBox>
  );
};

export default LeftBar;
