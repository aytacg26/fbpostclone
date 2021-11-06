import { Link } from 'react-router-dom';
import classes from './PrivacyTerms.module.scss';

const PrivacyTerms = () => {
  return (
    <div className={classes.Terms}>
      <Link to='/'>Privacy</Link>
      <Link to='/'>Terms</Link>
      <Link to='/'>Advertising</Link>
      <Link to='/'>Ad Choices</Link>
      <Link to='/'>Cookies</Link>
      <Link to='/'>More</Link>
      <span>TellBook &copy; {new Date().getFullYear()}</span>
    </div>
  );
};

export default PrivacyTerms;
