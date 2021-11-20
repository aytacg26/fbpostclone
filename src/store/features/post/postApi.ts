import { createAsyncThunk } from '@reduxjs/toolkit';
import IPostState from '../../../interfaces/IPostState';

export const getPosts = createAsyncThunk<IPostState>(
  'posts/getPosts',
  async () => {
    const response = await fetch('postsApi');
    return await response.json();
  }
);
