import { useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import MenuContainer from '../MenuContainer/MenuContainer';
import { Link } from 'react-router-dom';
import MenuShortcuts from './MenuShortcuts/MenuShortcuts';
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from 'react-icons/io';
import profile from '../../../assets/images/aytacguley.jpg';
import classes from './LeftMenu.module.scss';

const LeftMenuElements = [
  {
    id: 'left-menu-el-0001',
    title: 'Friends',
    icon: 'https://i.ibb.co/52JD5Yr/friends.png',
    iconColor: '#1B86f5',
    isImageLink: true,
  },
  {
    id: 'left-menu-el-0002',
    title: 'Groups',
    icon: 'https://i.ibb.co/sRXfdHJ/groups.png',
    iconColor: '#1B86f5',
    isImageLink: true,
  },
  {
    id: 'left-menu-el-0003',
    title: 'Marketplace',
    icon: 'https://i.ibb.co/Hg4CkwL/marketplace.png',
    iconColor: '#1B86f5',
    isImageLink: true,
  },
  {
    id: 'left-menu-el-0004',
    title: 'Watch',
    icon: 'https://i.ibb.co/WPcB5Nb/watch.png',
    iconColor: '#1B86f5',
    isImageLink: true,
  },
  {
    id: 'left-menu-el-0005',
    title: 'Memories',
    icon: 'https://i.ibb.co/5KnBDjc/memories.png',
    iconColor: '#1B86f5',
    isImageLink: true,
  },
  {
    id: 'left-menu-el-0006',
    title: 'Saved',
    icon: 'https://i.ibb.co/DgqzGwZ/saved.png',
    iconColor: '#1B86f5',
    isImageLink: true,
  },
  {
    id: 'left-menu-el-0007',
    title: 'Pages',
    icon: 'https://i.ibb.co/8sDxmCP/pages.png',
    iconColor: '#1B86f5',
    isImageLink: true,
  },
  {
    id: 'left-menu-el-0008',
    title: 'Events',
    icon: 'https://i.ibb.co/5vWL04M/events.png',
    iconColor: '#1B86f5',
    isImageLink: true,
  },
  {
    id: 'left-menu-el-0009',
    title: 'Ad Center',
    icon: 'https://i.ibb.co/SVcbnXh/AdCenter.png',
    iconColor: '#1B86f5',
    isImageLink: true,
  },
  {
    id: 'left-menu-el-0010',
    title: 'Ad Manager',
    icon: 'https://i.ibb.co/khZ7cS9/Ad-Manager.png',
    iconColor: '#1B86f5',
    isImageLink: true,
  },
  {
    id: 'left-menu-el-0011',
    title: 'Business Manager',
    icon: 'https://i.ibb.co/DwktV0P/Business-Manager.png',
    iconColor: '#1B86f5',
    isImageLink: true,
  },
  {
    id: 'left-menu-el-0012',
    title: 'Campus',
    icon: 'https://i.ibb.co/rcBZyGx/campus.png',
    iconColor: '#1B86f5',
    isImageLink: true,
  },
  {
    id: 'left-menu-el-0013',
    title: 'Community Help',
    icon: 'https://i.ibb.co/8s7THfx/community-Help.png',
    iconColor: '#1B86f5',
    isImageLink: true,
  },
  {
    id: 'left-menu-el-0014',
    title: 'Covid-19 Information Center',
    icon: 'https://i.ibb.co/BLCXSwb/covid-Info.png',
    iconColor: '#1B86f5',
    isImageLink: true,
  },
  {
    id: 'left-menu-el-0015',
    title: 'Emotional Health',
    icon: 'https://i.ibb.co/XFgTb2q/emotional-Health.png',
    iconColor: '#1B86f5',
    isImageLink: true,
  },
  {
    id: 'left-menu-el-0016',
    title: 'TellBook Pay',
    icon: 'https://i.ibb.co/LRKZGZj/tbookpay.png',
    iconColor: '#1B86f5',
    isImageLink: true,
  },
  {
    id: 'left-menu-el-0017',
    title: 'Favorites',
    icon: 'https://i.ibb.co/257sDRf/favorites.png',
    iconColor: '#1B86f5',
    isImageLink: true,
  },
  {
    id: 'left-menu-el-0018',
    title: 'Fundraisers',
    icon: 'https://i.ibb.co/LRgnvB3/fundriser.png',
    iconColor: '#1B86f5',
    isImageLink: true,
  },
];

const LeftMenu = () => {
  const [showMore, setShowMore] = useState(false);

  const menuExpandHandler = () => {
    setShowMore((prevState) => !prevState);
  };

  return (
    <MenuContainer>
      <Link to='/' className={classes.LeftMenuLink}>
        <MenuButton title={'Aytac Guley'} icon={profile} isImageLink />
      </Link>
      {LeftMenuElements.map((el, i) => {
        if (i < 8 && !showMore) {
          return (
            <Link to='/' className={classes.LeftMenuLink} key={el.id}>
              <MenuButton {...el} />
            </Link>
          );
        } else if (showMore) {
          return (
            <Link to='/' className={classes.LeftMenuLink} key={el.id}>
              <MenuButton {...el} />
            </Link>
          );
        } else {
          return null;
        }
      })}

      <div className={classes.LeftMenuLink} onClick={menuExpandHandler}>
        <MenuButton
          title={showMore ? 'Show Less' : 'Show More'}
          icon={
            showMore ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />
          }
        />
      </div>
      <MenuShortcuts />
    </MenuContainer>
  );
};

export default LeftMenu;
