import './App.css';
import { Route,BrowserRouter, Routes } from 'react-router-dom'

import Home from './page/Home/Home';
import Top from './page/Top/Top';
import Login from './page/Login/Login';
import Header from './components/Header/Header';
import Signup from './page/Signup/Signup';


function App() {
  return (
    <>
      <Header />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Top/>} />
            <Route path='/home' element={<Home/>}/>     
            <Route path='/login' element={<Login/>}/>    
            <Route path='/signup' element={<Signup/>}/> 
          </Routes>
        </BrowserRouter>
      </div>
    </>

  );
}

export default App;
