import { MdClear } from 'react-icons/md';
import classes from './MenuButton.module.scss';

interface IProps {
  id?: string;
  icon?: JSX.Element | string;
  title?: string;
  iconColor?: string;
  isCentered?: boolean;
  height?: number;
  isImageLink?: boolean;
  actionIcon?: JSX.Element | string;
  onClick?: (id: string) => void;
  onAction?: (id: string) => void;
}

const MenuButton = ({
  id,
  icon,
  title,
  iconColor,
  isCentered,
  height,
  isImageLink,
  actionIcon,
  onClick,
  onAction,
}: IProps) => {
  const menuButtonClickHandler = () => {
    if (id && onClick) {
      onClick(id);
    }
  };

  const actionHandler = () => {
    if (id && onAction) {
      onAction(id);
    }
  };

  let iconEl;

  if (typeof icon === 'string' && isImageLink) {
    iconEl = (
      <img
        src={icon}
        alt={title}
        title={title}
        width={35}
        height={35}
        style={{ borderRadius: '50%' }}
      />
    );
  } else {
    iconEl = icon;
  }

  return (
    <div
      className={`${classes.MenuButtonContainer} ${
        isCentered ? classes.centered : ''
      }`}
      style={{ height: height }}
      onClick={menuButtonClickHandler}
    >
      <span className={classes.MenuIcon} style={{ color: iconColor }}>
        {iconEl}
      </span>
      <span className={classes.MenuTitle}>
        <label>{title}</label>
      </span>
      {onAction && (
        <div className={classes.MenuActionButton}>
          <button onClick={actionHandler}>
            <MdClear />
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuButton;
