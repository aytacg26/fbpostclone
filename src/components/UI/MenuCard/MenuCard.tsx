import { forwardRef } from 'react';
import classes from './MenuCard.module.scss';
import PropTypes from 'prop-types';

interface IProps {
  children?: React.ReactNode;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  width?: number | string;
}

const MenuCard = forwardRef<HTMLDivElement, IProps>(
  ({ children, top, right, bottom, left, width }, ref) => {
    if (!children) {
      return null;
    }

    return (
      <div
        className={classes.MenuCard}
        style={{
          top: top,
          bottom: bottom,
          right: right,
          left: left,
          width: width,
        }}
        ref={ref}
      >
        {children}
        <i className={classes.TopArrow}>&#9650;</i>
        {/* <i className={classes.BottomArrow}>&#9660;</i> */}
      </div>
    );
  }
);

export default MenuCard;

MenuCard.propTypes = {
  children: PropTypes.node,
  top: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

MenuCard.defaultProps = {
  width: 320,
};
