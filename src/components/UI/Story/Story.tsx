import ProfileImage from '../ProfileImage/ProfileImage';
import StoryWindow from '../StoryWindow/StoryWindow';
import noProfileImage from '../../../assets/images/noprofileimage.png';
import classes from './Story.module.scss';
import PropTypes from 'prop-types';

interface IProps {
  username: string;
  userProfileImage?: string;
  storyImage?: string;
}

const Story = ({ username, userProfileImage, storyImage }: IProps) => {
  return (
    <StoryWindow image={storyImage}>
      <div className={classes.UserProfile}>
        <ProfileImage
          image={userProfileImage}
          width='35'
          height='35'
          username={username}
          backgroundColor='#1876f2'
        />
      </div>
      <div className={classes.UserName}>{username}</div>
    </StoryWindow>
  );
};

export default Story;

Story.propTypes = {
  username: PropTypes.string.isRequired,
  userProfileImage: PropTypes.string,
  storyImage: PropTypes.string,
};

Story.defaultProps = {
  userProfileImage: noProfileImage,
};
