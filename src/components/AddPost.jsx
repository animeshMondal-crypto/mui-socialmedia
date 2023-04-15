import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  Collections,
  EmojiEmotions,
  Videocam,
  PersonAddAlt1,
  CalendarMonth,
} from "@mui/icons-material";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  marginBottom: "20px",
});

const AddPost = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Add Posts"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 20 },
        }}
        onClick={(e) => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={250}
          bgcolor={"background.default"}
          color={"text.primary"}
          borderRadius={5}
          p={3}
        >
          <Typography variant="h6" color={"gray"} textAlign={"center"}>
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://picsum.photos/id/247/200/200"
              sx={{ height: 30, width: 30 }}
            />
            <Typography fontWeight={500} variant={"span"}>
              Animesh Mondal
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="what's in your mind.."
            variant="standard"
          />
          <Stack
            direction={"row"}
            gap={2}
            marginTop={2}
            marginBottom={2}
            sx={{ cursor: "pointer" }}
          >
            <EmojiEmotions color={"error"} />
            <Collections color={"action"} />
            <Videocam color={"warning"} />
            <PersonAddAlt1 color={"primary"} />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <CalendarMonth />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddPost;
