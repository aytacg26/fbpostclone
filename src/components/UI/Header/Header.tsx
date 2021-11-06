import React from 'react';
import SiteLogo from '../SiteLogo/SiteLogo';
import SearchBox from '../SearchBox/SearchBox';
import HeaderIcon from '../HeaderIcon/HeaderIcon';
import { AiFillHome, AiOutlineShop } from 'react-icons/ai';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <div className={classes.headerContainer}>
      <div className={classes.headerLeft}>
        <div className={classes.headerLogo}>
          <SiteLogo width='42' height='42' />
        </div>
        <div>
          <SearchBox />
        </div>
      </div>
      <div className={classes.headerCenter}>
        <HeaderIcon icon={<AiFillHome />} selected={true} label='Home' />
        <HeaderIcon
          icon={<MdOutlineOndemandVideo />}
          selected={false}
          label='Watch'
        />
        <HeaderIcon
          icon={<AiOutlineShop />}
          selected={false}
          label='Marketplace'
        />
        <HeaderIcon icon={<HiUserGroup />} selected={false} label='Groups' />
      </div>
      <div className={classes.headerRight}>Settings Section</div>
    </div>
  );
};

export default Header;
