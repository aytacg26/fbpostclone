import { useState, useRef } from 'react';
import useOnClickOutside from '../../../Hooks/useOnClickOutside';
import classes from './PostPresentationWindow.module.scss';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import PostImageWindow from '../PostImageWindow/PostImageWindow';
import PostText from './PostText/PostText';
import PostStatistics from './PostStatistics/PostStatistics';
import CircleButton from '../CircleButton/CircleButton';
import UserLabel from '../UserLabel/UserLabel';
import PostMenu from './PostMenu/PostMenu';
import PostInteractions from './PostInteractions/PostInteractions';
import { IPost } from '../../../interfaces/IPost';
import { actionBy } from '../../../types/dataTypes';

interface IProps {
  user: actionBy;
  post: IPost;
}

const PostPresentationWindow = ({ user, post }: IProps) => {
  const [showPostMenu, setShowPostMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(menuRef, () => setShowPostMenu(false));

  const postMenuHandler = () => {
    setShowPostMenu((prevState) => !prevState);
  };

  return (
    <div className={classes.PostPresentationWindowContainer}>
      <div className={classes.UpperSection}>
        <div className={classes.UserLabelMenuSection}>
          <UserLabel
            showDateAndTime={true}
            showFullName={true}
            user={user}
            dateAndTime={post.createdAt}
            privacyType={post.postPrivacyType}
            hasUserCard
          />
          <div className={classes.PostMenu}>
            <CircleButton
              backgroundColor='#fff'
              icon={<BiDotsHorizontalRounded />}
              onClick={postMenuHandler}
            />
            {showPostMenu && <PostMenu ref={menuRef} />}
          </div>
        </div>
        <PostText text={post.text} />
      </div>
      <PostImageWindow images={post.images} />
      <PostStatistics post={post} />
      <PostInteractions />
      <div>Comments Section</div>
    </div>
  );
};

export default PostPresentationWindow;
