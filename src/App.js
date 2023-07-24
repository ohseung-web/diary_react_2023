import './style/diary.css';
import Home from './pages/Home';
import New from './pages/New';
// import diary from './pages/diary';
import Edit from './pages/Edit';
import Diary2 from './pages/Diary2';

import { Routes, Route,Link } from 'react-router-dom';

function App() {
  return (
    <>
     <nav>
        <Link to={"/"}>Home</Link> 
        <Link to={"/new"}>New</Link> 
        <Link to={"/diary2"}>Diary</Link> 
        <Link to={"/edit"}>Edit</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary2" element={<Diary2 />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
      
    </>
  );
}

export default App;
