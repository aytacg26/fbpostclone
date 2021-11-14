import { useState } from 'react';
import { ILike } from '../../../../interfaces/IPost';
import TextButton from '../../TextButton/TextButton';
import PostRatingEmojies from '../PostRatingEmojies/PostRatingEmojies';
import classes from './PostRatings.module.scss';

interface IProps {
  likes?: ILike[];
}

const PostRatings = ({ likes }: IProps) => {
  const [showLikesList, setShowLikesList] = useState(false);

  if (!likes) return null;

  const totalLikes = likes.length;
  let likesList: string[] = [];

  if (likes) {
    likes.forEach((like) =>
      likesList.push(`${like.reactionBy.name} ${like.reactionBy.surname}`)
    );
  }

  const likesListHandler = () => {
    setShowLikesList((prevState) => !prevState);
  };

  const likesModalHandler = () => {
    console.log(
      'Open the modal which will show list of users who liked this post'
    );
  };

  return (
    <div className={classes.RatingsContainer}>
      <div className={classes.Emojies}>
        <PostRatingEmojies likes={likes} />
        {/**Create emoji component which will show 7 different emoji upon typeCount of each (>=1), each emoji will have a LinkLabel */}
      </div>
      <div>
        <TextButton
          showLabel={showLikesList}
          buttonText={totalLikes.toString()}
          onMouseEnter={likesListHandler}
          onMouseLeave={likesListHandler}
          defaultLabelText='No Likes'
          labelList={likesList}
          onClick={likesModalHandler}
        />
      </div>
    </div>
  );
};

export default PostRatings;
