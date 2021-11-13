import { Link } from 'react-router-dom';
import classes from './PrivacyTerms.module.scss';

//TODO : More is not a Link, it should be a text button and should open a Menu which will show (About, Careers, Developers, Help)
const PrivacyTerms = () => {
  return (
    <div className={classes.Terms}>
      <Link to='/privacy/explanation'>Privacy</Link>
      <Link to='/policies_center'>Terms</Link>
      <Link to='/business'>Advertising</Link>
      <Link to='/help/AdChoiceshelpId'>Ad Choices</Link>
      <Link to='/policies/cookies'>Cookies</Link>
      <Link to='/'>More</Link>
      <span>TellBook &copy; {new Date().getFullYear()}</span>
    </div>
  );
};

export default PrivacyTerms;
