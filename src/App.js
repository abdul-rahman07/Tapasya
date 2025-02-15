import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
