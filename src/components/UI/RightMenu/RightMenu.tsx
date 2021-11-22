import MenuContainer from '../MenuContainer/MenuContainer';
import MediaQuery from 'react-responsive';

const RightMenu = () => {
  return (
    <MediaQuery minWidth={1110}>
      <MenuContainer menuPosition='right'>
        <div>Right Menu</div>
      </MenuContainer>
    </MediaQuery>
  );
};

export default RightMenu;
