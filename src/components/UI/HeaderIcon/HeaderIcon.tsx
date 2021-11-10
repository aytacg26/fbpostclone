import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsQuestionLg } from 'react-icons/bs';
import LinkLabel from '../LinkLabel/LinkLabel';
import classes from './HeaderIcon.module.scss';
import PropTypes from 'prop-types';

interface IProps {
  icon: JSX.Element;
  selected?: boolean;
  label?: string;
  to: string;
}

const HeaderIcon = ({ to, icon, label, selected = false }: IProps) => {
  const [hover, setHover] = useState(false);

  const mouseEnterHandler = () => {
    setHover(true);
  };
  const mouseLeaveHandler = () => {
    setHover(false);
  };

  return (
    <Link
      to={to}
      className={`${classes.headerIcon} ${selected ? classes.selected : null}`}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <div className={classes.IconArea}>{icon}</div>
      {hover && <LinkLabel text={label} />}
    </Link>
  );
};

export default HeaderIcon;

HeaderIcon.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  label: PropTypes.string,
  selected: PropTypes.bool,
};

HeaderIcon.defaultProps = {
  to: '/link-not-set',
  label: 'Untitled',
  selected: false,
  icon: <BsQuestionLg style={{ color: 'red' }} />,
};
