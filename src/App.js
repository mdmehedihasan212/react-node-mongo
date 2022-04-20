import { Route, Routes } from 'react-router-dom';
import './App.css';
import Adduser from './components/Adduser/Adduser';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/user/add" element={<Adduser></Adduser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
