import PrivacyTerms from '../PrivacyTerms/PrivacyTerms';
import classes from './MenuShortcuts.module.scss';

type shortcut = {
  id?: string;
  title?: string;
  icon?: string;
};

const shortcuts: shortcut[] = [];

const MenuShortcuts = () => {
  return (
    <div className={classes.LeftMenuShotcuts}>
      <div>
        <h4>Your Shortcuts</h4>
        {shortcuts.length === 0 ? (
          <p>No shortcuts available</p>
        ) : (
          shortcuts.map((shortcut) => <p>Shortcut</p>)
        )}
      </div>
      <PrivacyTerms />
    </div>
  );
};

export default MenuShortcuts;
