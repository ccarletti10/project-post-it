import { useTheme } from "@emotion/react";
import { autocompleteClasses, Box, Card, CardActionArea } from "@mui/material";
import React from "react";
import "react-router-dom";
import { useNavigate } from "react-router-dom";

const PostContentBox = (props) => {
  const { clickable } = props;
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      {clickable ? (
        <Box
          sx={{
            padding: theme.spacing(2),
            width: "100%",
            "&:hover": { backgroundColor: "grey.50", cursor: "pointer" },
          }}
          onClick={() => navigate("/posts/1")}
        >
          {props.children}
        </Box>
      ) : (
        <Box sx={{ padding: theme.spacing(2) }}>{props.children}</Box>
      )}
    </>
  );
};

export default PostContentBox;