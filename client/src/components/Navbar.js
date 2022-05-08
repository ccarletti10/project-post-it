import {
  Avatar,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "react-icons/ai";
import { AiFillHome, AiFillMessage } from "react-icons/ai";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ mx: 2, my: 3 }}
      marginBottom={1}
      spacing={2}
    >
      <Typography variant="h4" mr={1}>
        PostIt
      </Typography>
      <TextField
        size="small"
        label="Search for posts..."
        sx={{ flexGrow: 1, maxWidth: 300 }}
      />
      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton>
          <AiFillHome />
        </IconButton>
        <IconButton>
          <AiFillMessage />
        </IconButton>
        <IconButton>
          <Avatar sx={{ width: 25, height: 25 }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Navbar;