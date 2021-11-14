import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCheck, FaFacebookMessenger } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { actionBy } from '../../../../types/dataTypes';
import ProfileImage from '../../ProfileImage/ProfileImage';
import Button from '../../Button/Button';
import classes from './UserCard.module.scss';

interface IProps {
  user: actionBy;
}

//TODO : add other user data section to Card, (ex: work, mutual friends, latest friends etc.)
const UserCard = ({ user }: IProps) => {
  const [cardPosition, setCardPosition] = useState({ top: 50, left: -85 });

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rect = cardRef.current?.getBoundingClientRect();

    if (rect) {
      rect.top <= 230
        ? setCardPosition({ top: 50, left: -85 })
        : setCardPosition({ top: -155, left: -85 });
    }
  }, []);

  return (
    <div
      className={classes.UserCardContainer}
      ref={cardRef}
      style={cardPosition}
    >
      <Link to={`/${user.id}`} className={classes.UserProfile}>
        <ProfileImage
          image={user.profileImage}
          height={'65'}
          width={'65'}
          username={`${user.name} ${user.surname}`}
        />
        <span>{`${user.name} ${user.surname}`}</span>
      </Link>
      <div className={classes.CardActions}>
        <Button text='Friends' icon={<FaUserCheck />} type='button' />
        <Button
          text='Message'
          color='blue'
          icon={<FaFacebookMessenger />}
          type='button'
        />
        <Button icon={<BsThreeDots />} />
      </div>
    </div>
  );
};

export default UserCard;
