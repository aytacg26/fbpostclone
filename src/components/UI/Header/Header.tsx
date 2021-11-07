import React, { useState, useRef, useEffect } from 'react';
import useOnClickOutside from '../../../Hooks/useOnClickOutside';
import SiteLogo from '../SiteLogo/SiteLogo';
import SearchBox from '../SearchBox/SearchBox';
import SearchBoxOnFocus from '../SearchBox/SearchBoxOnFocus/SearchBoxOnFocus';
import HeaderIcon from '../HeaderIcon/HeaderIcon';
import { AiFillHome, AiOutlineShop } from 'react-icons/ai';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi';
import { BiTimeFive } from 'react-icons/bi';
import classes from './Header.module.scss';

const recentSearchList = [
  {
    id: 'search-userid-0001',
    title: 'best restaurants in cyprus',
    icon: <BiTimeFive />,
  },
  {
    id: 'search-userid-0002',
    title: 'Mark Zuckerberg',
    icon: <BiTimeFive />,
  },
];

//TODO : From Header to MenuButton, we are forwarding delete action too much, need to use Context API or Redux
// Header => SearchBoxOnFocus => RecentSearchBar => MenuButton
const Header = () => {
  const [recentSearches, setRecentSearches] = useState(recentSearchList);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useOnClickOutside(inputRef, () => setIsInputFocused(false));

  useEffect(() => {
    if (isInputFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isInputFocused]);

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsInputFocused((prevState) => !prevState);
  };

  const handleDelete = (id: string) => {
    setRecentSearches((prevState) =>
      prevState.filter((search) => search.id !== id)
    );
  };

  return (
    <div className={classes.headerContainer}>
      <div className={classes.headerLeft}>
        {isInputFocused && (
          <SearchBoxOnFocus
            recentSearches={recentSearches}
            isInputFocused={isInputFocused}
            ref={inputRef}
            onDelete={handleDelete}
          />
        )}
        <div className={classes.headerLogo}>
          <SiteLogo width='42' height='42' />
        </div>
        <div>
          <SearchBox onFocus={handleInputFocus} />
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
