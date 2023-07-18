import {Route, Routes, BrowserRouter} from 'react-router-dom'
import LoginForm from './components/LoginForm';
import Stock from './components/Stock';
import Register from './components/Register';
import Truck from './components/Truck';


import './App.css';

function App() {
  return (
    <div>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginForm/>}/>
            <Route path='/stock' element={<Stock/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/truck' element={<Truck/>}/>
          </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
