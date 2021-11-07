import classes from './Backdrop.module.scss';

interface IProps {
  onClick: () => void;
}

const Backdrop = ({ onClick }: IProps) => {
  return <div className={classes.Backdrop} onClick={onClick}></div>;
};

export default Backdrop;
