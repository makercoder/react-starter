import { Divide } from 'react-feather';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screen/Home'
import Login from './screen/Login'
import Register from './screen/Register'



function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
