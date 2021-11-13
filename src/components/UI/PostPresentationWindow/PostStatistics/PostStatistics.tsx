import { useState, useEffect } from 'react';
import PostInteractionContainer from '../PostInteractionContainer/PostInteractionContainer';
import PostRatings from '../PostRatings/PostRatings';
import TextButton from '../../TextButton/TextButton';
import classes from './PostStatistics.module.scss';
import { IPost } from '../../../../interfaces/IPost';

interface IProps {
  post: IPost;
}
//TODO : TextButton Label List does not work properly because of max-width of center section,
//change the css structure of wall center!!!
//TODO : Comments text button onClick handler will hide comments part of Post
const PostStatistics = ({ post }: IProps) => {
  const [showShareLabel, setShowShareLabel] = useState(false);
  const [leaveTimer, setLeaveTimer] = useState(false);
  let labelList: string[] = [];

  const numberOfComments = post.comments ? post.comments.length : 0;
  const numberOfShares = post.shares ? post.shares.length : 0;

  if (numberOfShares > 0 && post.shares) {
    post.shares.forEach((share) => {
      labelList.push(`${share.reactionBy.name} ${share.reactionBy.surname}`);
    });
  }

  const showLabelHandler = () => {
    setShowShareLabel(true);
  };

  const shareLeaveTimerHandler = () => {
    setLeaveTimer(true);
  };

  const commentsSectionHandler = () => {
    console.log('This will dispatch the comments section hide action!!!');
  };

  useEffect(() => {
    let timer: any;

    if (leaveTimer) {
      timer = setTimeout(() => {
        setShowShareLabel(false);
        setLeaveTimer(false);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [leaveTimer]);

  return (
    <PostInteractionContainer hasSpaceBetween>
      <PostRatings likes={post.likes} />
      <div>
        {numberOfComments > 0 && (
          <TextButton
            buttonText={`${numberOfComments} Comments`}
            showLabel={false}
            onClick={commentsSectionHandler}
          />
        )}
        {numberOfShares > 0 && (
          <TextButton
            buttonText={`${numberOfShares} Shares`}
            showLabel={showShareLabel}
            onMouseEnter={showLabelHandler}
            onMouseLeave={shareLeaveTimerHandler}
            labelList={labelList}
          />
        )}
      </div>
    </PostInteractionContainer>
  );
};

export default PostStatistics;
