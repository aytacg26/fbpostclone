import { useState } from 'react';
import like from '../../../../assets/images/interactions/thumbsUp.svg';
import heart from '../../../../assets/images/interactions/heart.svg';
import care from '../../../../assets/images/interactions/care.svg';
import haha from '../../../../assets/images/interactions/HaHa.svg';
import wow from '../../../../assets/images/interactions/wow.svg';
import crying from '../../../../assets/images/interactions/crying.svg';
import angry from '../../../../assets/images/interactions/angry.svg';
import { ILike } from '../../../../interfaces/IPost';
import TextButton from '../../TextButton/TextButton';
import MenuButton from '../../MenuButton/MenuButton';
import classes from './PostRatings.module.scss';
import { likeType } from '../../../../types/dataTypes';

interface IProps {
  likes?: ILike[];
}

const getLikeIconByType = (likeType: likeType) => {
  switch (likeType) {
    case 'wow':
      return wow;
    case 'heart':
      return heart;
    case 'haha':
      return haha;
    case 'crying':
      return crying;
    case 'angry':
      return angry;
    case 'care':
      return care;

    default:
      return like;
  }
};

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
        Emojies
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
