import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../../store';

type search = {
  id: string;
  title: string;
  date?: string;
};

interface SearchState {
  recentSearches: search[];
}

const initialState: SearchState = {
  recentSearches: [
    {
      id: 'search-userid-0001',
      title: 'best restaurants in cyprus',
    },
    {
      id: 'search-userid-0002',
      title: 'Mark Zuckerberg',
    },
  ],
};

export const searchSlice = createSlice({
  name: 'RecentSearch',
  initialState,
  reducers: {
    addRecentSearch: (state, action: PayloadAction<search>) => {
      state.recentSearches.push(action.payload);
    },

    removeFromRecentSearch: (state, action: PayloadAction<string>) => {
      state.recentSearches = state.recentSearches.filter(
        (search) => search.id !== action.payload
      );
    },
  },
});

export const { addRecentSearch, removeFromRecentSearch } = searchSlice.actions;
export default searchSlice.reducer;
