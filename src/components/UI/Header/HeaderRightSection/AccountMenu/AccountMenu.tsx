import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import MenuButton from '../../../MenuButton/MenuButton';
import MenuCard from '../../../MenuCard/MenuCard';
import PrivacyTerms from '../../../LeftMenu/PrivacyTerms/PrivacyTerms';
import { MdFeedback, MdDarkMode } from 'react-icons/md';
import { FaCog } from 'react-icons/fa';
import { IoIosHelpCircle } from 'react-icons/io';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { IUser } from '../../../../../interfaces/IUser';
import classes from './AccountMenu.module.scss';

const MenuCardItems = [
  {
    id: 'menu-item-0001',
    title: 'Give Feedback',
    icon: <MdFeedback />,
    buttonInfoText: 'Help us improve the new Tellbook.',
    hasBottomBorder: true,
  },
  {
    id: 'menu-item-0002',
    title: 'Settings & Privacy',
    icon: <FaCog />,
  },

  {
    id: 'menu-item-0003',
    title: 'Help & Support',
    icon: <IoIosHelpCircle />,
  },
  {
    id: 'menu-item-0004',
    title: 'Display & Accessibility',
    icon: <MdDarkMode />,
  },
  {
    id: 'menu-item-0005',
    title: 'Log Out',
    icon: <RiLogoutBoxRFill />,
  },
];

interface IProps {
  user: IUser;
}

const AccountMenu = forwardRef<HTMLDivElement, IProps>(({ user }, ref) => {
  return (
    <MenuCard top={62} right={30} ref={ref}>
      <Link to={`/${user.id}`} className={classes.LeftMenuLink}>
        <MenuButton
          id={user.id}
          buttonInfoText='See your profile'
          title={`${user.name} ${user.surname}`}
          isImageLink
          icon={user.profileImage}
          padding='8px 2px'
          iconSize={55}
          hasBottomBorder
        />
      </Link>
      {MenuCardItems.map((item) => (
        <MenuButton {...item} padding={'10px 0'} key={item.id} />
      ))}
      <PrivacyTerms />
    </MenuCard>
  );
});

export default AccountMenu;
