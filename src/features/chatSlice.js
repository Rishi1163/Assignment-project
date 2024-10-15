// src/features/chatSlice.js
import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [
      { id: 1, user: 'User1', text: 'Hello!', timestamp: new Date().toLocaleTimeString() },
      { id: 2, user: 'User2', text: 'Hi, how are you?', timestamp: new Date().toLocaleTimeString() }
    ],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
