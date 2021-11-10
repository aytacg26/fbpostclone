import { MdClear } from 'react-icons/md';
import classes from './CircleButton.module.scss';

interface IProps {
  width?: string | number;
  height?: string | number;
  icon?: JSX.Element;
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
  backgroundColor?: string;
}

const CircleButton = ({
  width,
  height,
  icon,
  onClick,
  type,
  backgroundColor,
}: IProps) => {
  return (
    <button
      className={classes.CircleButtonContainer}
      style={{ width: width, height: height, backgroundColor: backgroundColor }}
      onClick={onClick}
      type={type}
    >
      {icon ? icon : <MdClear />}
    </button>
  );
};

export default CircleButton;
