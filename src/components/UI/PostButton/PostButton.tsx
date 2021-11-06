import classes from './PostButton.module.scss';
import PropTypes from 'prop-types';

interface IProps {
  username: string;
  onClick?: () => void;
}

const PostButton = ({ username, onClick }: IProps) => {
  return (
    <button className={classes.postButtonContainer} onClick={onClick}>
      What's on your mind, {username}
    </button>
  );
};

export default PostButton;

PostButton.propTypes = {
  username: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
