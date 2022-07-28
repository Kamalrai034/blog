// import './App.css';
// import { useContext } from 'react';
import Create from './component/Create';
import { Route, Routes } from 'react-router';
import Feed from './component/Feed';
// import { Storage } from './component/Storage';
import LogIn from './component/LogIn';

import Navbar from "./component/Navbar";

function App() {
  // const render = useContext(Storage)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Create />}/>
        <Route path='/login' element={<LogIn />} />
        <Route path='/feeds' element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
