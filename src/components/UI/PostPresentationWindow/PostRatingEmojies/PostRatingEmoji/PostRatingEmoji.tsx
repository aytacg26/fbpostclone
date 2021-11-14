import { useState } from 'react';
import like from '../../../../../assets/images/interactions/thumbsUp.svg';
import heart from '../../../../../assets/images/interactions/heart.svg';
import care from '../../../../../assets/images/interactions/care.svg';
import haha from '../../../../../assets/images/interactions/HaHa.svg';
import wow from '../../../../../assets/images/interactions/wow.svg';
import crying from '../../../../../assets/images/interactions/crying.svg';
import angry from '../../../../../assets/images/interactions/angry.svg';
import MenuButton from '../../../MenuButton/MenuButton';
import LinkLabel from '../../../LinkLabel/LinkLabel';
import { ILike } from '../../../../../interfaces/IPost';
import { likeType } from '../../../../../types/dataTypes';
import classes from './PostRatingEmoji.module.scss';
import { capitalizeText } from '../../../../../utils/utils';

interface IProps {
  likeType: likeType;
  likesOfType?: ILike[];
}

const getLikeIconByType = (likeType: likeType) => {
  switch (likeType) {
    case 'wow':
      return wow;
    case 'love':
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

const PostRatingEmoji = ({ likeType, likesOfType }: IProps) => {
  const [showLabel, setShowLabel] = useState(false);

  const labelHandler = () => {
    setShowLabel((prevState) => !prevState);
  };

  const reactionBy = likesOfType?.map(
    (like) => `${like.reactionBy.name} ${like.reactionBy.surname}`
  );

  const heading = capitalizeText(likeType);

  return (
    <div
      className={classes.PostRatingEmoji}
      onMouseEnter={labelHandler}
      onMouseLeave={labelHandler}
    >
      <MenuButton
        icon={getLikeIconByType(likeType)}
        isImageLink
        iconSize={20}
        noHoverBackground
      />
      {showLabel && (
        <LinkLabel heading={heading} top={28} left={48} text={reactionBy} />
      )}
    </div>
  );
};

export default PostRatingEmoji;
