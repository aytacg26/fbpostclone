import { IMenuButton } from '../../../../interfaces/Component';
import { Link } from 'react-router-dom';
import MenuButton from '../../MenuButton/MenuButton';
import classes from './RecentSearchBar.module.scss';

//TODO : Use State Management
const RecentSearchBar = ({ id, icon, title, onClick }: IMenuButton) => {
  const handleDelete = () => {
    if (onClick && id) {
      console.log(id);
      onClick(id);
    }
  };

  return (
    <Link to='/' className={classes.RecentSearchBar}>
      <MenuButton id={id} icon={icon} title={title} onAction={handleDelete} />
    </Link>
  );
};

export default RecentSearchBar;
