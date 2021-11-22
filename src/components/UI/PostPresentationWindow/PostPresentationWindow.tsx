import { useState, useRef, ChangeEvent, useEffect } from 'react';
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
import TextArea from '../TextArea/TextArea';
import { BsEmojiSmile, BsSticky } from 'react-icons/bs';
import { MdOutlinePhotoCamera } from 'react-icons/md';
import { AiOutlineFileGif } from 'react-icons/ai';

interface IProps {
  user: actionBy;
  post: IPost;
}

const PostPresentationWindow = ({ user, post }: IProps) => {
  const [showPostMenu, setShowPostMenu] = useState(false);
  const [formHeight, setFormHeight] = useState(0);
  const [initFormHeight, setInitFormHeight] = useState(0);
  const [comment, setComment] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  useOnClickOutside(menuRef, () => setShowPostMenu(false));

  const postMenuHandler = () => {
    setShowPostMenu((prevState) => !prevState);
  };

  const postCommentHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    if (formRef.current) {
      setFormHeight(formRef.current?.children[0].clientHeight);
      setInitFormHeight(formRef.current?.children[0].clientHeight);
    }
  }, []);

  useEffect(() => {
    if (
      formRef.current &&
      formHeight !== formRef.current?.children[0].clientHeight
    ) {
      setFormHeight(formRef.current?.children[0].clientHeight);
    }
  }, [comment, formHeight]);

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
      <div className={classes.CommentsSection}>
        <form
          className={classes.CommentForm}
          ref={formRef}
          style={{
            flexFlow: `${formHeight > initFormHeight ? 'column' : 'row'}`,
          }}
        >
          <TextArea
            value={comment}
            notValid={false}
            onChange={postCommentHandler}
            placeholder='Write a comment...'
            maxLength={600}
            rows={1}
            border='0 none'
            noFocus
          />
          <ul
            style={{
              width: `${formHeight > initFormHeight ? '100%' : 'max-content'}`,
            }}
          >
            <li>
              <BsEmojiSmile />
            </li>
            <li>
              <MdOutlinePhotoCamera />
            </li>
            <li>
              <AiOutlineFileGif />
            </li>
            <li>
              <BsSticky />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default PostPresentationWindow;

PostPresentationWindow.whyDidYouRender = true;
