// import './App.css';
// import { useContext } from 'react';
// import Create from './component/Create';
import Feed from './component/Feed';
// import { Storage } from './component/Storage';
// import LogIn from './component/LogIn';

// import Navbar from "./component/Navbar";

function App() {
  // const render = useContext(Storage)
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <LogIn /> */}
      {/* {!render.renderfeed && <Create />}
        
        {render.renderfeed &&  <Feed />} */}
        <Feed />
    </div>
  );
}

export default App;
