import './App.scss';
import Header from './components/UI/Header/Header';
import LeftMenu from './components/UI/LeftMenu/LeftMenu';
import RightMenu from './components/UI/RightMenu/RightMenu';
import PostSelectContainer from './components/UI/PostSelectContainer/PostSelectContainer';
import CreatePostSection from './components/UI/PostSelectContainer/CreatePostSection/CreatePostSection';
import PostOptionsSection from './components/UI/PostSelectContainer/PostOptionsSection/PostOptionsSection';
import StoryContainer from './components/UI/StoryContainer/StoryContainer';
import Modal from './components/UI/Modal/Modal/Modal';
import Backdrop from './components/UI/Modal/Backdrop/Backdrop';
import ModalContainer from './components/UI/Modal/ModalContainer/ModalContainer';
import CircleButton from './components/UI/CircleButton/CircleButton';

//TODO : Use Context API or Redux for state management, heavy prop drilling started!!!
const App = () => {
  return (
    <div className='App'>
      <Modal
        showModal={false}
        title='Create Post'
        onCloseModal={() => console.log('Closing Modal')}
      >
        <div>Markus Antonious</div>
      </Modal>
      <Header />
      <div className='main-content-container'>
        <LeftMenu />
        <div className='posts-section'>
          <StoryContainer />
          <PostSelectContainer>
            <CreatePostSection />
            <PostOptionsSection />
          </PostSelectContainer>
        </div>
        <RightMenu />
      </div>
    </div>
  );
};

export default App;
