import classes from './PostPresentationWindow.module.scss';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import PostImageWindow from '../PostImageWindow/PostImageWindow';
import CircleButton from '../CircleButton/CircleButton';
import UserLabel from '../UserLabel/UserLabel';

//This will get all data from Post and User, Text Section will be rendered if there is a text above the post
const PostPresentationWindow = () => {
  return (
    <div className={classes.PostPresentationWindowContainer}>
      <div className={classes.UpperSection}>
        <div className={classes.UserLabelMenuSection}>
          <UserLabel />
          <div>
            <CircleButton
              backgroundColor='#fff'
              icon={<BiDotsHorizontalRounded />}
            />
          </div>
        </div>
        <div className={classes.TextSection}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          asperiores eius beatae officiis facilis aliquam excepturi libero
          reiciendis consequuntur corrupti cumque ipsam adipisci eligendi
          deserunt, nisi quibusdam saepe distinctio possimus.
        </div>
      </div>
      <PostImageWindow />
      <div>Interaction Statistics</div>
      <div>Interaction Options</div>
      <div>Comments Section</div>
    </div>
  );
};

export default PostPresentationWindow;
