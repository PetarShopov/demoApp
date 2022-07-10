import './App.css';
import { CustomSearch } from './components/shared/CustomSearch';
import { CustomNavButtons } from './components/shared/CustomNavButtons';
import { ImagesView } from "./features/imagesView/ImagesView";

function App() {
  return (
    <div className="App">
      <CustomSearch/>
      <ImagesView/>
      <CustomNavButtons/>
    </div>
  );
}

export default App;
