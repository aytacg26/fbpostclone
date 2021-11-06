import { useState } from 'react';
import classes from './HeaderIcon.module.scss';
import PropTypes from 'prop-types';

interface IProps {
  icon: JSX.Element;
  selected: boolean;
  label: string;
}

const HeaderIcon = ({ icon, label, selected = false }: IProps) => {
  const [hover, setHover] = useState(false);

  const mouseEnterHandler = () => {
    setHover(true);
  };
  const mouseLeaveHandler = () => {
    setHover(false);
  };

  return (
    <div
      className={`${classes.headerIcon} ${selected ? classes.selected : null}`}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <div className={classes.IconArea}>{icon}</div>
      {hover && <label>{label}</label>}
    </div>
  );
};

export default HeaderIcon;

HeaderIcon.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string,
  selected: PropTypes.bool,
};

HeaderIcon.defaultProps = {
  label: 'Untitled',
  selected: false,
};
