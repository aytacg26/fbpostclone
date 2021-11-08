import { Fragment, useState, useEffect, forwardRef } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { IMenuButton } from '../../../../interfaces/Component';
import RecentSearchBar from '../RecentSearchBar/RecentSearchBar';
import classes from './SearchBoxOnFocus.module.scss';

interface IProps {
  recentSearches: IMenuButton[];
  isInputFocused: boolean;
}

const SearchBoxOnFocus = forwardRef<HTMLInputElement, IProps>(
  ({ recentSearches, isInputFocused }, ref) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      if (isInputFocused) {
        setAnimate(true);
      }
    }, [isInputFocused]);

    return (
      <div className={classes.SearchBoxOnFocusContainer}>
        <div
          className={`${classes.SearchSection} ${
            animate ? classes.focused : ''
          }`}
        >
          <label>
            <BsArrowLeft />
          </label>
          <input type='search' placeholder='Search TellBook' ref={ref} />
        </div>
        <div className={classes.SearchList}>
          {recentSearches.length > 0 ? (
            <Fragment>
              <h3>Recent Searches</h3>
              {recentSearches.map((search) => (
                <RecentSearchBar
                  id={search.id}
                  title={search.title}
                  key={search.id}
                />
              ))}
            </Fragment>
          ) : (
            <div className={classes.NoSearch}>
              <p>No recent searches</p>
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default SearchBoxOnFocus;
