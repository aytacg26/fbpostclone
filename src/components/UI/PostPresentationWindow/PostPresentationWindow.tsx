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

//This will get all data from Post and User, Text Section will be rendered if there is a text above the post
const PostPresentationWindow = () => {
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
          <UserLabel showDateAndTime={true} showFullName={true} />
          <div className={classes.PostMenu}>
            <CircleButton
              backgroundColor='#fff'
              icon={<BiDotsHorizontalRounded />}
              onClick={postMenuHandler}
            />
            {showPostMenu && <PostMenu ref={menuRef} />}
          </div>
        </div>
        <PostText
          text=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
      asperiores eius beatae officiis facilis aliquam excepturi libero
      reiciendis consequuntur corrupti cumque ipsam adipisci eligendi deserunt,
      nisi quibusdam saepe distinctio possimus.'
        />
      </div>
      <PostImageWindow />
      <PostStatistics />
      <PostInteractions />
      <div>Comments Section</div>
    </div>
  );
};

export default PostPresentationWindow;
