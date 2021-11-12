import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './features/ui/uiSlice';
import searchReducer from './features/search/searchSlice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    search: searchReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
