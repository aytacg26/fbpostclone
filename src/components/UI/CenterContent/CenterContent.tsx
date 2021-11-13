import { useAppSelector } from '../../../store/hooks';
import StoryContainer from '../StoryContainer/StoryContainer';
import PostPresentationWindow from '../PostPresentationWindow/PostPresentationWindow';
import PostSelect from '../../Pages/Home/PostSelect/PostSelect';
import classes from './CenterContent.module.scss';

const CenterContent = () => {
  const { posts } = useAppSelector((state) => state.posts);

  const sortedPosts = [...posts].sort((a, b) => {
    return b.createdAt.getTime() - a.createdAt.getTime();
  });

  return (
    <div className={classes.postsSection}>
      <StoryContainer />
      <PostSelect />
      <div style={{ marginTop: '10px', maxHeight: '100%' }}>
        {sortedPosts.map((post) => (
          <PostPresentationWindow
            user={post.createdBy}
            post={post}
            key={post.id}
          />
        ))}
      </div>
      <div className={classes.endOfSection}></div>
    </div>
  );
};

export default CenterContent;
