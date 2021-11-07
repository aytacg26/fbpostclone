import { MdClear } from 'react-icons/md';
import classes from './CircleButton.module.scss';

interface IProps {
  width?: string | number;
  height?: string | number;
  icon?: JSX.Element;
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
}

const CircleButton = ({ width, height, icon, onClick, type }: IProps) => {
  return (
    <button
      className={classes.CircleButtonContainer}
      style={{ width: width, height: height }}
      onClick={onClick}
      type={type}
    >
      {icon ? icon : <MdClear />}
    </button>
  );
};

export default CircleButton;
