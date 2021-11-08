import classes from './MenuContainer.module.scss';
import PropTypes from 'prop-types';

interface IProps {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
  menuPosition: 'left' | 'right';
}

const MenuContainer = ({ children, menuPosition }: IProps) => {
  return (
    <div
      className={`${classes.MenuContainer} ${
        menuPosition === 'left' ? classes.Left : classes.Right
      }`}
    >
      {children}
    </div>
  );
};

export default MenuContainer;

MenuContainer.propTypes = {
  children: PropTypes.node,
  menuPosition: PropTypes.string,
};

MenuContainer.defaultProps = {
  menuPosition: 'left',
};
