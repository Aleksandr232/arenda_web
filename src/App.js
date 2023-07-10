import {Route, Routes, BrowserRouter} from 'react-router-dom'
import LoginForm from './components/LoginForm';
import Stock from './components/Stock';
import Register from './components/Register';

import './App.css';

function App() {
  return (
    <div>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginForm/>}/>
            <Route path='/stock' element={<Stock/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
