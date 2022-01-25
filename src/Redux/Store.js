import { configureStore } from '@reduxjs/toolkit';
import CommentSlice from './reducers/CommentSlice';
import MemorySlice from './reducers/MemorySlice';
import LoginSlice from './reducers/LoginSlice';

export const store = configureStore({
  reducer: {
      comment:CommentSlice,
      memory:MemorySlice,
      login:LoginSlice
  },
})