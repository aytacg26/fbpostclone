import { BsSearch } from 'react-icons/bs';
import classes from './SearchBox.module.scss';

//TODO : Make it looks like real facebook search box, currently it is very simple
const SearchBox = () => {
  return (
    <div className={classes.SearchBox}>
      <label>
        <BsSearch />
      </label>
      <input type='search' name='search' placeholder='Search TBook' />
    </div>
  );
};

export default SearchBox;
