import CircleButton from '../../CircleButton/CircleButton';
import classes from './ModalContainer.module.scss';
import PropTypes from 'prop-types';

interface IProps {
  children: React.ReactNode;
  title?: string;
  buttonPosition?: 'action' | 'close';
  buttonIcon?: JSX.Element;
  onClick?: () => void;
  onAction?: () => void;
}

const ModalContainer = ({
  children,
  title,
  buttonPosition,
  buttonIcon,
  onClick,
  onAction,
}: IProps) => {
  return (
    <div className={classes.ModalContainer}>
      <div className={classes.HeaderSection}>
        {buttonPosition === 'action' && (
          <CircleButton icon={buttonIcon} onClick={onAction} />
        )}
        <h3>{title}</h3>
        {buttonPosition === 'close' && <CircleButton onClick={onClick} />}
      </div>
      <div className={classes.ModalContent}>{children}</div>
    </div>
  );
};

export default ModalContainer;

ModalContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string,
  buttonPosition: PropTypes.string,
  buttonIcon: PropTypes.element,
  onClick: PropTypes.func,
  onAction: PropTypes.func,
};

ModalContainer.defaultProps = {
  title: 'Untitled Modal',
  buttonPosition: 'close',
};
