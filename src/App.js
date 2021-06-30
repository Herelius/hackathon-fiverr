import './App.css';
import SelectPage from './assets/SelectPage';
import PrimarySearchAppBar from './components/navbar';

const App = () => {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <SelectPage />
    </div>
  );
};

export default App;
