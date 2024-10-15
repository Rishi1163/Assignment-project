// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { Container, Box } from '@mui/material';
import store from './store';
import Chat from './components/Chat';
import MessageInput from './components/MessageInput';

const App = () => {
  return (
    <Provider store={store}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          bgcolor: '#f5f5f5',
          flexDirection: 'column' // Column layout to stack chat and input
        }}
      >
        {/* Chat Container */}
        <Container
          maxWidth="md"
          sx={{
            backgroundColor: 'white',
            padding: 3,
            borderRadius: 3,
            boxShadow: 3,
            flex: 1,  // Allows the chat container to grow and take up available space
            overflowY: 'auto', // Ensures the chat window is scrollable
            maxHeight: '80vh', // Prevents chat from taking up too much height
          }}
        >
          <h2 style={{ textAlign: 'center' }}>Chat Application</h2>
          <Chat />
        </Container>

        {/* Message Input Box */}
        <Container
          maxWidth="md"
          sx={{
            paddingTop: 2,
            width: '100%',
            backgroundColor: 'white',
            borderTop: '1px solid #ddd', // Adds a top border to distinguish from chat window
          }}
        >
          <MessageInput />
        </Container>
      </Box>
    </Provider>
  );
};

export default App;
