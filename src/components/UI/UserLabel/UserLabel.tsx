import { useState } from 'react';
import { Link } from 'react-router-dom';
import LinkLabel from '../LinkLabel/LinkLabel';
import { MdOutlinePublic } from 'react-icons/md';
import profile from '../../../assets/images/aytacguley.jpg';
import classes from './UserLabel.module.scss';

const UserLabel = () => {
  const [showTimeLabel, setShowTimeLabel] = useState(false);
  const [showPrivacyLabel, setShowPrivacyLabel] = useState(false);
  const [showUserCard, setShowUserCard] = useState(false);

  //TODO : use moment.js to show dates and times
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

  const privacyLabelHandler = () => {
    setShowPrivacyLabel((prevState) => !prevState);
  };

  return (
    <div className={classes.UserLabelContainer}>
      <Link to='/user-id' className={classes.UserProfileImage}>
        <img src={profile} alt='Aytac Guley' height='45' width='45' />
      </Link>
      <div className={classes.DataSection}>
        <Link to='/user-id'>Aytac Guley</Link>
        <div className={classes.AdditionalData}>
          <Link
            to='/posts/postid'
            onMouseEnter={dateLabelHandler}
            onMouseLeave={dateLabelHandler}
          >
            {today}
            {showTimeLabel && <LinkLabel text={today} />}
          </Link>
          <span>.</span>
          <span
            className={classes.privacy}
            onMouseEnter={privacyLabelHandler}
            onMouseLeave={privacyLabelHandler}
            title='Shared with public'
          >
            <MdOutlinePublic />
            {showPrivacyLabel && <LinkLabel text='Public' />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserLabel;
