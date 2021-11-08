import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface UIState {
  showModal: boolean;
  isSearchBoxFocused: boolean;
}

const initialState: UIState = {
  showModal: false,
  isSearchBoxFocused: false,
};

export const uiSlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    setModalStatus: (state) => {
      state.showModal = !state.showModal;
    },

    setSearchBoxFocus: (state) => {
      state.isSearchBoxFocused = !state.isSearchBoxFocused;
    },
  },
});

export const { setModalStatus, setSearchBoxFocus } = uiSlice.actions;
export default uiSlice.reducer;
