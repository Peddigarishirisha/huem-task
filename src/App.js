import 'bootstrap/dist/css/bootstrap.min.css';

import CollapsibleExample from './components/Navbar';
import Secondnav from './components/another';

import HorizontalImageDisplay from './components/scrollimage';
import Atomatic from './components/automatic';
import Cards from './components/cards';

import SequentialImageDisplay from './components/imagedispay';


function App() {
  return (
    <div className="App">
      <CollapsibleExample />
      <Secondnav />
      {/* <DarkVariantExample /> */}
      {/* <Update /> */}
  <HorizontalImageDisplay></HorizontalImageDisplay>
  <Atomatic></Atomatic>
  <Cards></Cards>
  <SequentialImageDisplay></SequentialImageDisplay>
    </div>
  );
}

export default App;
