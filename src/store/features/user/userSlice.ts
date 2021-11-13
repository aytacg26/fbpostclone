import { createSlice } from '@reduxjs/toolkit'; //currently we do  not need PayloadAction to toolkit
import type { RootState } from '../../store'; //currently no required
import { IUser } from '../../../interfaces/IUser';
import profile from '../../../assets/images/aytacguley.jpg';

interface UserState {
  user: IUser;
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
