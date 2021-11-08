import PostSelectContainer from '../../../UI/PostSelectContainer/PostSelectContainer';
import CreatePostSection from '../../../UI/PostSelectContainer/CreatePostSection/CreatePostSection';
import PostOptionsSection from '../../../UI/PostSelectContainer/PostOptionsSection/PostOptionsSection';

const PostSelect = () => {
  return (
    <PostSelectContainer>
      <CreatePostSection />
      <PostOptionsSection />
    </PostSelectContainer>
  );
};

export default PostSelect;
