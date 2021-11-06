import classes from './ProfileImage.module.scss';
import noProfileImage from '../../../assets/images/noprofileimage.png';

interface IProps {
  image: string;
  username: string;
  width: string;
  height: string;
  backgroundColor?: string;
}

const ProfileImage = ({
  image,
  username,
  width,
  height,
  backgroundColor,
}: IProps) => {
  return (
    <div
      className={classes.ProfileImageContainer}
      style={{
        width: Number(width),
        height: Number(height),
        backgroundColor: backgroundColor,
      }}
    >
      <img
        src={image ? image : noProfileImage}
        alt={username}
        width={width}
        height={height}
      />
    </div>
  );
};

export default ProfileImage;

ProfileImage.defaultProps = {
  image: noProfileImage,
};
