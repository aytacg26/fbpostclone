import { useAppSelector } from '../../../../store/hooks';
import SectionContainer from '../SectionContainer/SectionContainer';
import ProfileImage from '../../ProfileImage/ProfileImage';
import PostButton from '../../PostButton/PostButton';

const CreatePostSection = () => {
  const { user } = useAppSelector((state) => state.user);

  const postButtonClickHandler = () => {
    console.log('Open Post model...');
  };

  return (
    <SectionContainer hasBottomBorder>
      <ProfileImage
        image={user.profileImage}
        username={`${user.name} ${user.surname}`}
        width='40'
        height='40'
      />
      <PostButton username={user.name} onClick={postButtonClickHandler} />
    </SectionContainer>
  );
};

export default CreatePostSection;
