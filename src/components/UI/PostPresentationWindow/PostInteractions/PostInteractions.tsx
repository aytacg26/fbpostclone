import PostInteractionContainer from '../PostInteractionContainer/PostInteractionContainer';
import MenuButton from '../../MenuButton/MenuButton';
import { BiLike } from 'react-icons/bi';
import { VscComment } from 'react-icons/vsc';
import { RiShareForwardLine } from 'react-icons/ri';

const PostInteractions = () => {
  return (
    <PostInteractionContainer>
      <MenuButton icon={<BiLike />} title='Like' isCentered height={40} />
      <MenuButton
        icon={<VscComment />}
        title='Comment'
        isCentered
        height={40}
      />
      <MenuButton
        icon={<RiShareForwardLine />}
        title='Share'
        isCentered
        height={40}
      />
    </PostInteractionContainer>
  );
};

export default PostInteractions;
