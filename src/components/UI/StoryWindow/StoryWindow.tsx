import classes from './StoryWindow.module.scss';

interface IProps {
  image?: string;
  children: JSX.Element | JSX.Element[];
}

const StoryWindow = ({ image, children }: IProps) => {
  return (
    <div className={classes.StoryWindow}>
      <div className={classes.Glass}></div>
      <div
        className={classes.StoryImage}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {children}
    </div>
  );
};

export default StoryWindow;
