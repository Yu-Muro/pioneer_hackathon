import './App.css';
import { Route,BrowserRouter, Routes } from 'react-router-dom'
import Home from './page/Home/Home';
import Top from './page/Top/Top';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Top/>} />
          <Route path='/home' element={<Home/>}/>      
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
