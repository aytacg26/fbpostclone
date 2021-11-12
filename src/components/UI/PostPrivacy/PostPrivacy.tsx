import { useState } from 'react';
import { privacy } from '../../../types/dataTypes';
import LinkLabel from '../LinkLabel/LinkLabel';
import { MdOutlinePublic } from 'react-icons/md';
import { FaUserFriends, FaLock, FaUserAlt, FaCog } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import classes from './PostPrivacy.module.scss';

const getPrivacyTypeProps = (
  privacyType: privacy,
  groupName = '',
  numberOfSpecificFriends = 1
) => {
  switch (privacyType) {
    case 'only me':
      return {
        title: 'Only me',
        icon: <FaLock />,
        labelText: 'Only me',
      };

    case 'group members':
      return {
        title: 'Group Members',
        icon: <HiUserGroup />,
        labelText: `Members of ${groupName}`,
      };

    case 'friends':
      return {
        title: 'Your Friends',
        icon: <FaUserFriends />,
        labelText: 'Friends',
      };

    case 'specific friends':
      return {
        title: 'Specific Friends',
        icon: numberOfSpecificFriends === 1 ? <FaUserAlt /> : <FaCog />,
        labelText: '',
      };

    default:
      return {
        title: 'Shared with public',
        icon: <MdOutlinePublic />,
        labelText: 'Public',
      };
  }
};

interface IProps {
  privacyType: privacy;
  groupName?: string;
  numberOfSpecificFriends?: number;
}

const PostPrivacy = ({
  privacyType,
  groupName,
  numberOfSpecificFriends,
}: IProps) => {
  const [showPrivacyLabel, setShowPrivacyLabel] = useState(false);
  const privacyData = getPrivacyTypeProps(
    privacyType,
    groupName,
    numberOfSpecificFriends
  );

  const privacyLabelHandler = () => {
    setShowPrivacyLabel((prevState) => !prevState);
  };

  return (
    <div
      className={classes.privacy}
      onMouseEnter={privacyLabelHandler}
      onMouseLeave={privacyLabelHandler}
      title={privacyData.title}
    >
      {privacyData.icon}
      {showPrivacyLabel && <LinkLabel text={privacyData.labelText} />}
    </div>
  );
};

export default PostPrivacy;
