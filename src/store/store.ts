import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './features/ui/uiSlice';
import searchReducer from './features/search/searchSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
