import { useAppDispatch } from '../../../../store/hooks';
import { removeFromRecentSearch } from '../../../../store/features/search/searchSlice';
import { IMenuButton } from '../../../../interfaces/Component';
import { Link } from 'react-router-dom';
import { BiTimeFive } from 'react-icons/bi';
import MenuButton from '../../MenuButton/MenuButton';
import classes from './RecentSearchBar.module.scss';
import PropTypes from 'prop-types';

//TODO : For searches, we will need an action, Link may not be suitable for this Component
const RecentSearchBar = ({ id, title }: IMenuButton) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    if (id) {
      dispatch(removeFromRecentSearch(id));
    }
  };

  return (
    <Link to='/' className={classes.RecentSearchBar}>
      <MenuButton
        id={id}
        icon={<BiTimeFive />}
        title={title}
        onAction={handleDelete}
      />
    </Link>
  );
};

export default RecentSearchBar;

RecentSearchBar.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
