import { BsSearch } from 'react-icons/bs';
import classes from './SearchBox.module.scss';

interface IProps {
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

//TODO : Make it looks like real facebook search box, currently it is very simple
const SearchBox = ({ onFocus }: IProps) => {
  return (
    <div className={classes.SearchBox}>
      <label>
        <BsSearch />
      </label>

      <input
        type='search'
        name='search'
        placeholder='Search TellBook'
        onFocus={onFocus}
      />
    </div>
  );
};

export default SearchBox;
