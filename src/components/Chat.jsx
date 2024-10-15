// src/components/Chat.jsx
import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Chat = () => {
  const messages = useSelector((state) => state.chat.messages);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Box
      sx={{
        maxHeight: '400px',
        overflowY: 'auto',
        bgcolor: 'background.paper',
        padding: 2,
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <List>
        {messages.map((message) => (
          <ListItem
            key={message.id}
            sx={{
              display: 'flex',
              flexDirection: message.user === 'User1' ? 'row-reverse' : 'row',
              alignItems: 'flex-start',
            }}
          >
            <Avatar sx={{ bgcolor: message.user === 'User1' ? 'green' : 'blue', margin: 1 }}>
              {message.user[0]}
            </Avatar>
            <Box
              sx={{
                bgcolor: message.user === 'User1' ? 'green.100' : 'blue.100',
                color: message.user === 'User1' ? 'green.900' : 'blue.900',
                borderRadius: 2,
                padding: 1,
                maxWidth: '70%',
              }}
            >
              <Typography variant="body1">{message.text}</Typography>
              <Typography variant="caption" color="textSecondary">{message.timestamp}</Typography>
            </Box>
          </ListItem>
        ))}
        <div ref={chatEndRef} />
      </List>
    </Box>
  );
};

export default Chat;
