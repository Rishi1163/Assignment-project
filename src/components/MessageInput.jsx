// src/components/MessageInput.jsx
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addMessage } from '../features/chatSlice';

const MessageInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSend = () => {
    if (input.trim()) {
      dispatch(addMessage({
        id: Date.now(),
        user: 'User1',
        text: input,
        timestamp: new Date().toLocaleTimeString()
      }));
      setInput('');

      // Simulate receiving a message after 2 seconds
      setTimeout(() => {
        dispatch(addMessage({
          id: Date.now() + 1,
          user: 'User2',
          text: 'This is an auto-reply!',
          timestamp: new Date().toLocaleTimeString()
        }));
      }, 2000);
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, paddingTop: 2 }}>
      <TextField
        label="Type a message"
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' ? handleSend() : null}
      />
      <Button variant="contained" color="primary" onClick={handleSend}>
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
