import { useState } from 'react';
import { Link } from 'react-router-dom';
import LinkLabel from '../../LinkLabel/LinkLabel';
import PostPrivacy from '../../PostPrivacy/PostPrivacy';
import classes from './UserLabelAdditionalData.module.scss';
import { actionBy, privacy } from '../../../../types/dataTypes';
import { generatePostTime } from '../../../../utils/utils';

interface IProps {
  user: actionBy;
  dateAndTime: Date;
  privacyType: privacy;
  showDateAndTime: boolean;
  showFullName: boolean;
}

//TODO : Create state for Posts in Redux, for this part we will need data from state (postid, post privacy, post date etc.)
const UserLabelAdditionalData = ({
  user,
  dateAndTime,
  privacyType,
  showDateAndTime,
  showFullName,
}: IProps) => {
  const [showTimeLabel, setShowTimeLabel] = useState(false);

  const postTime = generatePostTime(dateAndTime);

  const dateLabelHandler = () => {
    setShowTimeLabel((prevState) => !prevState);
  };

  return (
    <div className={classes.DataSection}>
      <Link to={`/${user.id}`}>{`${user.name} ${
        showFullName ? user.surname : ''
      }`}</Link>
      {showDateAndTime && (
        <div className={classes.AdditionalData}>
          <Link
            to='/posts/postid'
            onMouseEnter={dateLabelHandler}
            onMouseLeave={dateLabelHandler}
          >
            {postTime.postDate}
            {showTimeLabel && <LinkLabel text={postTime.label} />}
          </Link>
          <div className={classes.Seperator}></div>
          <PostPrivacy privacyType={privacyType} />
        </div>
      )}
    </div>
  );
};

export default UserLabelAdditionalData;
