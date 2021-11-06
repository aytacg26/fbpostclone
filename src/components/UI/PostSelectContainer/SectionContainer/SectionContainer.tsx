import classes from './SectionContainer.module.scss';
import PropTypes from 'prop-types';

interface IProps {
  children: JSX.Element | JSX.Element[];
  hasBottomBorder?: boolean;
}

const SectionContainer = ({ children, hasBottomBorder }: IProps) => {
  return (
    <div
      className={`${classes.SectionContainer} ${
        hasBottomBorder ? classes.containerBorder : ''
      }`}
    >
      {children}
    </div>
  );
};

export default SectionContainer;

SectionContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  hasBottomBorder: PropTypes.bool,
};

SectionContainer.defaultProps = {
  hasBottomBorder: false,
};
