import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';
import HeaderSearchSection from './HeaderSearchSection/HeaderSearchSection';
import HeaderPagesMenu from './HeaderPagesMenu/HeaderPagesMenu';
import ProfileImage from '../ProfileImage/ProfileImage';
import { IoApps } from 'react-icons/io5';
import { FaFacebookMessenger } from 'react-icons/fa';
import { MdNotifications } from 'react-icons/md';
import { TiArrowSortedDown } from 'react-icons/ti';
import CircleButton from '../CircleButton/CircleButton';

import classes from './Header.module.scss';

const Header = () => {
  const { user } = useAppSelector((state) => state.user);
  const btnMargin = '0 6px 0 6px';

  const headerMenuHandler = () => {
    console.log('Open Header Menu');
  };

  const messengerHandler = () => {
    console.log('Open messenger');
  };

  const notificationsHandler = () => {
    console.log('Open Notifications');
  };

  const accountMenuHandler = () => {
    console.log('Open Account Menu');
  };

  return (
    <div className={classes.headerContainer}>
      <HeaderSearchSection />
      <HeaderPagesMenu />
      <div className={classes.headerRight}>
        <Link to={`/${user.id}`} className={classes.User}>
          <ProfileImage
            image={user.profileImage}
            username={`${user.name} ${user.surname}`}
            width='35'
            height='35'
            backgroundColor='transparent'
          />
          <span>{user.name}</span>
        </Link>
        <CircleButton
          icon={<IoApps />}
          title='Menu'
          margin={btnMargin}
          onClick={headerMenuHandler}
        />
        <CircleButton
          icon={<FaFacebookMessenger />}
          title='Messenger'
          margin={btnMargin}
          onClick={messengerHandler}
        />
        <CircleButton
          icon={<MdNotifications />}
          title='Notifications'
          margin={btnMargin}
          onClick={notificationsHandler}
        />
        <CircleButton
          icon={<TiArrowSortedDown />}
          title='Account'
          margin={btnMargin}
          onClick={accountMenuHandler}
        />
      </div>
    </div>
  );
};

export default Header;
