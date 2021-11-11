import classes from './PostText.module.scss';

interface IProps {
  text: string;
}

const PostText = ({ text }: IProps) => {
  return (
    <div className={classes.TextSection}>
      <p>{text}</p>
    </div>
  );
};

export default PostText;
