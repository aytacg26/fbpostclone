import { image, actionBy, likeType, privacy } from '../types/dataTypes';

interface IReaction {
  id: string;
  reactionBy: actionBy;
  isFriend: boolean;
  createdAt: Date;
}

export interface ILike extends IReaction {
  likeType: likeType;
}

export interface IComment extends IReaction {
  text: string;
  likes?: ILike[];
  replies?: IComment[];
}

export interface IShare extends IReaction {}

export interface IPost {
  id: string;
  createdAt: Date;
  createdBy: actionBy;
  postPrivacyType: privacy;
  text?: string;
  images?: image[];
  likes?: ILike[];
  comments?: IComment[];
  shares?: IShare[];
}
