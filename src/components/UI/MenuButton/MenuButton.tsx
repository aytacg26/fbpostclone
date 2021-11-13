import { MdClear } from 'react-icons/md';
import classes from './MenuButton.module.scss';

interface IProps {
  id?: string;
  icon?: JSX.Element | string;
  iconSize?: number;
  title?: string;
  buttonInfoText?: string;
  iconColor?: string;
  margin?: string | number;
  padding?: string | number;
  isCentered?: boolean;
  hasBottomBorder?: boolean;
  height?: number;
  isImageLink?: boolean;
  actionIcon?: JSX.Element | string;
  onClick?: (id: string) => void;
  onAction?: (id: string) => void;
}

//TODO : Use Action icon instead of Md, check if it is required or Md Icon is enough and if it is remove actionIcon
const MenuButton = ({
  id,
  icon,
  iconSize,
  title,
  iconColor,
  isCentered,
  height,
  isImageLink,
  buttonInfoText,
  hasBottomBorder,
  margin,
  padding,
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
        width={!iconSize ? 35 : iconSize}
        height={!iconSize ? 35 : iconSize}
        style={{ borderRadius: '50%' }}
      />
    );
  } else {
    iconEl = icon;
  }

  return (
    <div
      className={classes.MainContainer}
      style={{
        height: height,
        borderBottom: `${hasBottomBorder ? '1px solid #ccc' : ''}`,
      }}
    >
      <div
        className={`${classes.MenuButtonContainer} ${
          isCentered ? classes.centered : ''
        }`}
        onClick={menuButtonClickHandler}
        style={{ margin: margin }}
      >
        <div
          className={classes.Content}
          style={{ padding: padding, margin: margin }}
        >
          <span
            className={classes.MenuIcon}
            style={{ color: iconColor, fontSize: iconSize }}
          >
            {iconEl}
          </span>
          <div className={classes.MenuTitle}>
            <label>{title}</label>
            {buttonInfoText && <span>{buttonInfoText}</span>}
          </div>
        </div>
        {onAction && (
          <div className={classes.MenuActionButton}>
            <button onClick={actionHandler}>
              <MdClear />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuButton;
