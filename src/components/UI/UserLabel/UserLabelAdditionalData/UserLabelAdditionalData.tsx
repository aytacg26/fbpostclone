import { useState } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { Link } from 'react-router-dom';
import LinkLabel from '../../LinkLabel/LinkLabel';
import PostPrivacy from '../../PostPrivacy/PostPrivacy';
import classes from './UserLabelAdditionalData.module.scss';

interface IProps {
  showDateAndTime: boolean;
  showFullName: boolean;
}

//TODO : Create state for Posts in Redux, for this part we will need data from state (postid, post privacy, post date etc.)
const UserLabelAdditionalData = ({ showDateAndTime, showFullName }: IProps) => {
  const [showTimeLabel, setShowTimeLabel] = useState(false);
  const { user } = useAppSelector((state) => state.user);

  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

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
            {today}
            {showTimeLabel && <LinkLabel text={today} />}
          </Link>
          <div className={classes.Seperator}></div>
          <PostPrivacy privacyType='friends' />
        </div>
      )}
    </div>
  );
};

export default UserLabelAdditionalData;
