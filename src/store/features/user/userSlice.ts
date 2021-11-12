import { createSlice } from '@reduxjs/toolkit'; //currently we do  not need PayloadAction to toolkit
import type { RootState } from '../../store'; //currently no required
import { location } from '../../../types/dataTypes';
import profile from '../../../assets/images/aytacguley.jpg';

interface UserState {
  user: {
    id: string;
    name: string;
    surname: string;
    profileImage: string;
    currentWork: string;
    numberOfFriends: number;
    workPlace: location;
    from: location;
    livesIn: location;
    numberOfFollowers: number;
    photos?: string[]; //photo urls
    posts?: string[]; //posts init data with Id to fetch from posts collection, for posts we need to create seperate collection and each post will be a seperate document
  };
}

const initialState: UserState = {
  user: {
    id: 'aytac.guley127',
    name: 'Aytac',
    surname: 'Guley',
    profileImage: profile,
    currentWork: 'Frontend Developer',
    numberOfFriends: 100,
    workPlace: {
      city: 'Nicosia',
      country: 'Cyprus',
    },
    from: {
      city: 'Famagusta',
      country: 'Cyprus',
    },
    livesIn: {
      city: 'Famagusta',
      country: 'Cyprus',
    },
    numberOfFollowers: 37,
  },
};

//currently we do not have any user action, this may contain
//update user data (name, surname, workplace etc.)
//update user friends number, in case of removing a friend from friends array, friends array will contain the init data of friends (id, name etc.)
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

// export const {  } = userSlice.actions;
export default userSlice.reducer;
