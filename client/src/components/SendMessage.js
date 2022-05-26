import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { sendMessage } from "../api/messages";
import { isLoggedIn } from "../helpers/authHelper";
import HorizontalStack from "./util/HorizontalStack";

const SendMessage = (props) => {
  const [content, setContent] = useState("");
  const user = isLoggedIn();

  const handleSendMessage = async () => {
    const newMessage = { direction: "from", content };
    const newMessages = [newMessage, ...props.messages];

    props.setMessages(newMessages);
    props.scrollToBottom();
    setContent("");

    await sendMessage(user, newMessage, props.recipient._id);
  };

  return (
    <Stack
      sx={{
        m: 2,
        height: "40px",
      }}
      justifyContent="center"
    >
      <HorizontalStack>
        <TextField
          onChange={(e) => setContent(e.target.value)}
          label="Send a message..."
          fullWidth
          value={content}
          autoComplete="off"
          size="small"
        />

        <Button onClick={handleSendMessage} disabled={content.length === 0}>
          Send
        </Button>
      </HorizontalStack>
    </Stack>
  );
};

export default SendMessage;