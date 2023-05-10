import {Route, Routes, BrowserRouter} from 'react-router-dom'
import LoginForm from './components/LoginForm';
import Stock from './components/Stock';
import './App.css';

function App() {
  return (
    <div>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginForm/>}/>
            <Route path='/stock' element={<Stock/>}/>
          </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
