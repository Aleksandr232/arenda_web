import {Route, Routes, BrowserRouter} from 'react-router-dom'
import LoginForm from './components/LoginForm';
import Stock from './components/Stock';
import Register from './components/Register';
import Truck from './components/Truck';
import Lesa from './components/Lesa';
import Tours from './components/Tours';
import Texnic from './components/Texnic';


import './App.css';

function App() {
  return (
    <div>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginForm/>}/>
            <Route path='/stock' element={<Stock/>}/>
            <Route path='/lesa' element={<Lesa/>}/>
            <Route path='/tours' element={<Tours/>}/>
            <Route path='/texnic' element={<Texnic/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/truck' element={<Truck/>}/>
          </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
