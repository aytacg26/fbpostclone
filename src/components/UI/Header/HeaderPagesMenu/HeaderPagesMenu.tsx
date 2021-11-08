import HeaderIcon from '../../HeaderIcon/HeaderIcon';
import { AiFillHome, AiOutlineShop } from 'react-icons/ai';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi';
import classes from './HeaderPagesMenu.module.scss';

//TODO : add correct uri for the pages after creating related pages. Each HeaderIcon is a Link from react-router-dom
const HeaderPagesMenu = () => {
  return (
    <div className={classes.headerCenter}>
      <HeaderIcon to='/' icon={<AiFillHome />} selected={true} label='Home' />
      <HeaderIcon
        to='/'
        icon={<MdOutlineOndemandVideo />}
        selected={false}
        label='Watch'
      />
      <HeaderIcon
        to='/'
        icon={<AiOutlineShop />}
        selected={false}
        label='Marketplace'
      />
      <HeaderIcon
        to='/'
        icon={<HiUserGroup />}
        selected={false}
        label='Groups'
      />
    </div>
  );
};

export default HeaderPagesMenu;
