import { useState, useEffect } from 'react';
import PostInteractionContainer from '../PostInteractionContainer/PostInteractionContainer';
import PostRatings from '../PostRatings/PostRatings';
import TextButton from '../../TextButton/TextButton';
import classes from './PostStatistics.module.scss';

const userRatings = {
  byUser: [
    {
      id: 'rating-0001',
      userId: 'user-0001',
      userName: 'Aytac Güley',
      rateType: 'like',
    },
    {
      id: 'rating-0002',
      userId: 'user-0002',
      userName: 'Aslı Güley',
      rateType: 'like',
    },
    {
      id: 'rating-0003',
      userId: 'user-0003',
      userName: 'Ziba Güley',
      rateType: 'heart',
    },
    {
      id: 'rating-0004',
      userId: 'user-0004',
      userName: 'Fatma Güley',
      rateType: 'like',
    },
    {
      id: 'rating-0005',
      userId: 'user-0005',
      userName: 'Halil Güley',
      rateType: 'care',
    },
    {
      id: 'rating-0006',
      userId: 'user-0006',
      userName: 'Mark Zuckerberg',
      rateType: 'angry',
    },
    {
      id: 'rating-0007',
      userId: 'user-0007',
      userName: 'Elon Musk',
      rateType: 'haha',
    },
    {
      id: 'rating-0008',
      userId: 'user-0008',
      userName: 'Bill Gates',
      rateType: 'wow',
    },
    {
      id: 'rating-0009',
      userId: 'user-0009',
      userName: 'Dan Abramov',
      rateType: 'crying',
    },
  ],
  totals: {
    like: 3,
    heart: 1,
    care: 1,
    angry: 1,
    haha: 1,
    wow: 1,
    crying: 1,
  },
};

//TODO : TextButton Label List does not work properly because of max-width of center section,
//change the css structure of wall center!!!
//TODO : Comments text button onClick handler will hide comments part of Post
const PostStatistics = () => {
  const [showShareLabel, setShowShareLabel] = useState(false);
  const [leaveTimer, setLeaveTimer] = useState(false);

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
      <PostRatings />
      <div>
        <TextButton
          buttonText={`${61} Comments`}
          showLabel={false}
          onClick={commentsSectionHandler}
        />
        <TextButton
          buttonText={`${10} Shares`}
          showLabel={showShareLabel}
          onMouseEnter={showLabelHandler}
          onMouseLeave={shareLeaveTimerHandler}
          labelList={[
            'Aytaç Güley',
            'Aslı Güley',
            'Ziba Güley',
            'Fatma Güley',
            'Halil Güley',
            'Mark Zuckerberg',
            'Gerald Hubert Irvin John Kenneth',
          ]}
        />
      </div>
    </PostInteractionContainer>
  );
};

export default PostStatistics;
