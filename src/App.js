import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import Detail from './Components/Detail';
import Search from './Components/Search';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
