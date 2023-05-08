import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Home from './pages/home/Home';
import Passage from './pages/passage-parchments/Passage';
import Governence from './pages/governance/Governence';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='passage-parchments' element={<Passage/>}/>
    <Route path='governence' element={<Governence/>}/>

    {/* <Home/> */}
    {/* Passage */}
    {/* <Passage/> */}
    {/* <Governence/> */}
    </Route>
    </Routes>
    </>
  );
}

export default App;
