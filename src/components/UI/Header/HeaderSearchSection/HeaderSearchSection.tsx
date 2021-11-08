import { useRef, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { setSearchBoxFocus } from '../../../../store/features/ui/uiSlice';
import SearchBoxOnFocus from '../../SearchBox/SearchBoxOnFocus/SearchBoxOnFocus';
import SiteLogo from '../../SiteLogo/SiteLogo';
import SearchBox from '../../SearchBox/SearchBox';
import useOnClickOutside from '../../../../Hooks/useOnClickOutside';
import classes from './HeaderSearchSection.module.scss';

const HeaderSearchSection = () => {
  const { recentSearches } = useAppSelector((state) => state.search);
  const { isSearchBoxFocused } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);
  useOnClickOutside(inputRef, () => dispatch(setSearchBoxFocus()));

  useEffect(() => {
    if (isSearchBoxFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchBoxFocused]);

  return (
    <div className={classes.headerLeft}>
      {isSearchBoxFocused && (
        <SearchBoxOnFocus
          recentSearches={recentSearches}
          isInputFocused={isSearchBoxFocused}
          ref={inputRef}
        />
      )}
      <div className={classes.headerLogo}>
        <SiteLogo width='42' height='42' />
      </div>
      <div>
        <SearchBox />
      </div>
    </div>
  );
};

export default HeaderSearchSection;
