import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';
import UserLabelAdditionalData from './UserLabelAdditionalData/UserLabelAdditionalData';
import ProfileImage from '../ProfileImage/ProfileImage';
import classes from './UserLabel.module.scss';
import PropTypes from 'prop-types';

interface IProps {
  showDateAndTime: boolean;
  showFullName: boolean;
  hasBackground?: boolean;
  width?: string;
}

//TODO : Add props to the component
//TODO : Install latest version of Moment.js for the dates (or if there is better option, use that package)
//TODO : Create UserCard Component and add it to the UserLabel, add prop to make it active or passive!!
//TODO : Make Label's place dynamic, it should check if it is outside the main section, should move left or right or top or bottom automatically!!
const UserLabel = ({
  showDateAndTime,
  showFullName,
  hasBackground,
  width,
}: IProps) => {
  //const [showUserCard, setShowUserCard] = useState(false);
  const { user } = useAppSelector((state) => state.user);

  //TODO : use moment.js to show dates and times

  return (
    <div
      className={`${classes.UserLabelContainer} ${
        hasBackground ? classes.buttonShape : ''
      }`}
    >
      <Link to={`/${user.id}`}>
        <ProfileImage
          image={user.profileImage}
          height={width ? width : '42'}
          width={width ? width : '42'}
          username={`${user.name} ${user.surname}`}
        />
      </Link>
      <UserLabelAdditionalData
        showDateAndTime={showDateAndTime}
        showFullName={showFullName}
      />
    </div>
  );
};

export default UserLabel;

UserLabel.propTypes = {
  showDateAndTime: PropTypes.bool.isRequired,
  showFullName: PropTypes.bool.isRequired,
};
