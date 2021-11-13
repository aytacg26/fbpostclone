import { useState, useRef } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import ProfileImage from '../../ProfileImage/ProfileImage';
import CircleButton from '../../CircleButton/CircleButton';
import AccountMenu from './AccountMenu/AccountMenu';
import { Link } from 'react-router-dom';
import { IoApps } from 'react-icons/io5';
import { FaFacebookMessenger } from 'react-icons/fa';
import { MdNotifications } from 'react-icons/md';
import { TiArrowSortedDown } from 'react-icons/ti';
import useOnClickOutside from '../../../../Hooks/useOnClickOutside';
import classes from './HeaderRightSection.module.scss';

const HeaderRightSection = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const accountMenuRef = useRef<HTMLDivElement>(null);
  const { user } = useAppSelector((state) => state.user);
  useOnClickOutside(accountMenuRef, () => setShowAccountMenu(false));
  const btnMargin = '0 6px 0 6px';

  const headerMenuHandler = () => {
    setShowAccountMenu(false);
  };

  const messengerHandler = () => {
    setShowAccountMenu(false);
  };

  const notificationsHandler = () => {
    setShowAccountMenu(false);
  };

  const accountMenuHandler = () => {
    setShowAccountMenu((prevState) => !prevState);
  };

  return (
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
      {showAccountMenu && <AccountMenu user={user} ref={accountMenuRef} />}
    </div>
  );
};

export default HeaderRightSection;
