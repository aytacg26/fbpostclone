import classes from './PostInteractionContainer.module.scss';
interface IProps {
  children: React.ReactNode;
  hasSpaceBetween?: boolean;
}

const PostInteractionContainer = ({ children, hasSpaceBetween }: IProps) => {
  return (
    <div
      className={`${classes.PostInteractionContainer} ${
        hasSpaceBetween ? classes.spaceBetween : ''
      }`}
    >
      {children}
    </div>
  );
};

export default PostInteractionContainer;
