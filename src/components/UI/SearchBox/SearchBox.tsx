import { useAppDispatch } from '../../../store/hooks';
import { setSearchBoxFocus } from '../../../store/features/ui/uiSlice';
import { BsSearch } from 'react-icons/bs';
import classes from './SearchBox.module.scss';

//TODO : Make it looks like real facebook search box, currently it is very simple
const SearchBox = () => {
  const dispatch = useAppDispatch();

  const focusHandler = () => {
    dispatch(setSearchBoxFocus());
  };

  return (
    <div className={classes.SearchBox}>
      <label>
        <BsSearch />
      </label>

      <input
        type='search'
        name='search'
        placeholder='Search TellBook'
        onFocus={focusHandler}
      />
    </div>
  );
};

export default SearchBox;
