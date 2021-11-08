import './App.scss';
import Header from './components/UI/Header/Header';
import HomePage from './components/Pages/Home/HomePage';
import Modal from './components/UI/Modal/Modal/Modal';

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
      <HomePage />
    </div>
  );
};

export default App;
