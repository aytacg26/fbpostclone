import { likeType } from '../../../../types/dataTypes';
import { ILike } from '../../../../interfaces/IPost';
import classes from './PostRatingEmojies.module.scss';
import PostRatingEmoji from './PostRatingEmoji/PostRatingEmoji';

const getLikeListByType = (likes: ILike[], likeType: likeType) => {
  return likes.filter((like) => like.likeType === likeType);
};

const mapLikeTypes = (likes: ILike[]) => {
  const likeTypes = likes.map((like) => like.likeType);

  const distinctTypes = Array.from(new Set(likeTypes));

  return distinctTypes;
};

interface IProps {
  likes?: ILike[];
}

type orginizedLikes = {
  likeType: likeType;
  likeListByType: ILike[];
};

//TODO : Find a better way currently time complexity of creating orginizedLikeType is O(n2)
//in case of 1 or 2 million likes, it will take too much time to orginize them
//in any case the max length of likeTypeList will be 7, it has O(1) structure in worst case
//but on the other hand, to get all 7 types, we need to map through all likes.
const PostRatingEmojies = ({ likes }: IProps) => {
  if (!likes) return null;

  let likeTypeList: likeType[] = [];
  let orginizedLikeTypes: orginizedLikes[] = [];

  if (likes) {
    likeTypeList = mapLikeTypes(likes);
  }

  likeTypeList.forEach((likeType) => {
    const likeListByType = getLikeListByType(likes, likeType);
    const likeTypeData = { likeType, likeListByType };

    orginizedLikeTypes.push(likeTypeData);
  });

  return (
    <div className={classes.PostRatingEmojiContainer}>
      {orginizedLikeTypes.map((oLT) => (
        <PostRatingEmoji
          likeType={oLT.likeType}
          likesOfType={oLT.likeListByType}
          key={oLT.likeType}
        />
      ))}
    </div>
  );
};

export default PostRatingEmojies;
