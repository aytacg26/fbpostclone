import { location } from '../types/dataTypes';

export interface IUser {
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
}
