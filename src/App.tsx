import './App.scss';
import Header from './components/UI/Header/Header';
import HomePage from './components/Pages/Home/HomePage';
import Modal from './components/UI/Modal/Modal/Modal';

//TODO : Use Context API or Redux for state management, heavy prop drilling started!!!
//TODO : Post Modal will be with Post Button Element Click, use Redux (We will need different kinds of Modal Contents!!!)
//1- Create Post Content
//2- Tag People Content (with a search bar)
//3- How Are you feeling emojies content (with a search bar)
//4- Search for location Content (with a search bar)
//2,3 and 4 are almost same, only Title and List contents are different, for search bar use SearchBox component
//Before all modals, create Post Component (Component after getting data from user)
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
      <HomePage />
    </div>
  );
};

export default App;
