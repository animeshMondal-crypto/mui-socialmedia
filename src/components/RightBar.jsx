import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const RightBar = () => {
  return (
    <StyledBox flex={2} p={2}>
      <Box position={"fixed"}>
        <Typography variant="h6" fontWeight={"100"}>
          Online Friends
        </Typography>
        <AvatarGroup
          max={7}
          sx={{ cursor: "pointer", justifyContent: "flex-end" }}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://loremflickr.com/320/240?random=2"
          />
          <Avatar
            alt="Travis Howard"
            src="https://loremflickr.com/g/320/240/paris,girl/all"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://loremflickr.com/g/320/240/paris,boy/all"
          />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar
            alt="Trevor Henderson"
            src="https://loremflickr.com/320/240?random=3"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://loremflickr.com/320/240?random=3"
          />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar
            alt="Trevor Henderson"
            src="https://loremflickr.com/320/240?random=3"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={"100"} mt={2} mb={2}>
          Latest Posts
        </Typography>
        <ImageList cols={3} sx={{ cursor: "pointer" }}>
          <ImageListItem>
            <img src="https://picsum.photos/id/247/200/200" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/id/220/200/200" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/id/222/200/200" alt="" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={"100"} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            cursor: "pointer",
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://picsum.photos/id/217/200/200"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://picsum.photos/id/147/200/200"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </StyledBox>
  );
};

export default RightBar;
