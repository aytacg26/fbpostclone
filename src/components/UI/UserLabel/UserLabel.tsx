import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserLabelAdditionalData from './UserLabelAdditionalData/UserLabelAdditionalData';
import ProfileImage from '../ProfileImage/ProfileImage';
import classes from './UserLabel.module.scss';
import PropTypes from 'prop-types';
import { actionBy, privacy } from '../../../types/dataTypes';
import UserCard from './UserCard/UserCard';

interface IProps {
  user: actionBy;
  dateAndTime: Date;
  privacyType: privacy;
  showDateAndTime: boolean;
  showFullName: boolean;
  hasBackground?: boolean;
  width?: string;
  hasUserCard?: boolean;
}

//TODO : Add props to the component
//TODO : Install latest version of Moment.js for the dates (or if there is better option, use that package)
//TODO : Create UserCard Component and add it to the UserLabel, add prop to make it active or passive!!
//TODO : Make Label's place dynamic, it should check if it is outside the main section, should move left or right or top or bottom automatically!!
const UserLabel = ({
  user,
  dateAndTime,
  privacyType,
  showDateAndTime,
  showFullName,
  hasBackground,
  width,
  hasUserCard,
}: IProps) => {
  const [showUserCard, setShowUserCard] = useState(false);
  const [startUserCardShow, setStartUserCardShow] = useState(false);

  const userCardHandler = () => {
    setStartUserCardShow((prevState) => !prevState);
  };

  useEffect(() => {
    let timer: any;

    if (startUserCardShow) {
      timer = setTimeout(() => {
        setShowUserCard(true);
      }, 600);
    } else {
      timer = setTimeout(() => {
        setShowUserCard(false);
      }, 200);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [startUserCardShow]);

  return (
    <div
      className={`${classes.UserLabelContainer} ${
        hasBackground ? classes.buttonShape : ''
      }`}
      onMouseEnter={userCardHandler}
      onMouseLeave={userCardHandler}
    >
      <Link to={`/${user.id}`}>
        <ProfileImage
          image={user.profileImage}
          height={width ? width : '42'}
          width={width ? width : '42'}
          username={`${user.name} ${user.surname}`}
        />
      </Link>
      <UserLabelAdditionalData
        dateAndTime={dateAndTime}
        user={user}
        privacyType={privacyType}
        showDateAndTime={showDateAndTime}
        showFullName={showFullName}
      />
      {showUserCard && hasUserCard && <UserCard user={user} />}
    </div>
  );
};

export default UserLabel;

UserLabel.propTypes = {
  showDateAndTime: PropTypes.bool.isRequired,
  showFullName: PropTypes.bool.isRequired,
};
