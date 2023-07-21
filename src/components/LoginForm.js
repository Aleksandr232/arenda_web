import { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom'
import Alert from "./Alert/Alert";
import axios from "axios";

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    const handleRememberMe = () => {
      setRememberMe(!rememberMe);
  }

    const handleLogin = () => {
      const token = localStorage.getItem('token');
      if (!email || !password) {
        alert('Неверный логин или пароль');
      }
            
      axios.post('https://xn--80aagge2ckkol0hd.xn--p1ai/api/login-stock', {
        email,
        password,
        headers: {
          Authorization: `Bearer ${token}`
        } 
      })
      .then(response => {
        const username = response.data.username;
        setSuccess(`Успешный вход, ${username}!`);
          setTimeout(() => {
            navigate('/stock', { username: username });
          }, 2000);
      })
      .catch(error => {
        setError('Произошла ошибка авторизации: пользователь не авторизован', error.message);
        
      });

    }

    useEffect(() => {
      const savedEmail = localStorage.getItem('email');
      const savedPassword = localStorage.getItem('password');
      if (savedEmail && savedPassword) {
          setEmail(savedEmail);
          setPassword(savedPassword);
      }
  }, []);

  useEffect(() => {
      if (rememberMe) {
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
      } else {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
      }
  }, [rememberMe, email, password]);

 
 
    return(
      
       <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Войти в аккаунт</h2>
          <p className="mt-2 text-center text-sm text-gray-600"></p>
        </div>
        <div className="mt-8 space-y-6" >
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
            
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
               onChange={(e)=>setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="почта"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
              onChange={(e)=>setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="пароль"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={rememberMe}
                onChange={handleRememberMe}
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Запомнить меня
              </label>
              <label htmlFor="remember-me" className=" ml-2 block text-sm text-gray-900">
              <Link to={'/register'}>Зарегистрироваться</Link>
              </label>
            </div>
          </div>

          <div>
            <button
              onClick={handleLogin}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
               {/*  <LockClosedIcon className="h-5 w-5 text-black group-hover:text-indigo-400" aria-hidden="true" /> */}
              </span>
             Войти
            </button>
          </div>
          {success && <Alert message={success} success /> }
          {error && <Alert message={error} success /> }
        </div>
        
      </div>
      
    </div>
    
    )
}

export default LoginForm;
    