import classes from './MenuButton.module.scss';

interface IProps {
  id?: string;
  icon?: JSX.Element | string;
  title?: string;
  iconColor?: string;
  isCentered?: boolean;
  height?: number;
  isImageLink?: boolean;
  onClick?: (id: string) => void;
}

const MenuButton = ({
  id,
  icon,
  title,
  iconColor,
  isCentered,
  height,
  isImageLink,
  onClick,
}: IProps) => {
  const menuButtonClickHandler = () => {
    if (id && onClick) {
      console.log(`Menu Button with an Id of ${id}`);
      onClick(id);
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
    </div>
  );
};

export default MenuButton;
