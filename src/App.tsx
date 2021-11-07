import './App.scss';
import Header from './components/UI/Header/Header';
import LeftMenu from './components/UI/LeftMenu/LeftMenu';
import RightMenu from './components/UI/RightMenu/RightMenu';
import PostSelectContainer from './components/UI/PostSelectContainer/PostSelectContainer';
import CreatePostSection from './components/UI/PostSelectContainer/CreatePostSection/CreatePostSection';
import PostOptionsSection from './components/UI/PostSelectContainer/PostOptionsSection/PostOptionsSection';
import StoryContainer from './components/UI/StoryContainer/StoryContainer';

//TODO : Use Context API or Redux for state management, heavy prop drilling started!!!
const App = () => {
  return (
    <div className='App'>
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
