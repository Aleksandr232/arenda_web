import { useState } from "react";
import axios from "axios";


const Stock = (props) => { 
    
    const [tours, setTours] = useState('');
    const [lesa, setLesa] = useState('');
    const [tractor, setTractor] = useState('');
    const [texnica, setTexnica] = useState('');
    const [gazelnew, setGazelnew] = useState('');
    const [gazelold, setGazelold] = useState('');
    const [username, setUsername] = useState('');
    const [rama, setRama] = useState('');
    const [ramadioganal, setRamadioganal] = useState('');
    const [conect, setConect] = useState('');
    const [nastil, setNastil] = useState('');
    const [rigel, setRigel] = useState('');
    const [bash, setBash] = useState('');
    const [jack, setJack] = useState('');

    const [message, setMessage] = useState('');
    const [logout, setLogout] = useState('');
    
    const handleLogout = async () => {
      try {
        const response = await axios.post('https://xn--80aagge2ckkol0hd.xn--p1ai/api/logout',{
          logout
        });
        setMessage(response.data.success);
        // Perform any additional actions after logout, such as redirecting to a different page
      } catch (error) {
        console.error(error);
        setMessage('Error occurred during logout');
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      
      axios.put('https://xn--80aagge2ckkol0hd.xn--p1ai/api/stock/1',{
        texnica,
        tours,
        tractor,
        lesa,
        gazelnew,
        gazelold,
        username,
        rama,
        rigel,
        ramadioganal,
        bash,
        jack,
        nastil,
        conect
           
    })
    .then((response) => {
        setTexnica(e.target.value='');
        setTours(e.target.value='');
        setTractor(e.target.value='');
        setLesa(e.target.value='');
        setGazelnew(e.target.value='');
        setGazelold(e.target.value='');
        setUsername(e.target.value='');
      
      
      
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
    
  
   
  
  
    };

    return(
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Войти в аккаунт</h2>
            <p className="mt-2 text-center text-sm text-gray-600"></p>
          </div> */}
          <div onClick={handleLogout}>выйти</div>
          <div className="mt-8 space-y-6" >
            <div className="rounded-md shadow-sm -space-y-px">
            <form onSubmit={handleSubmit} action="">
              <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="количиство лесов"
                  onChange={(e)=>setLesa(e.target.value)}
                  
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="количиство вышки-тур"
                  onChange={(e)=>setTours(e.target.value)}
                 
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="isuzu"
                  onChange={(e)=>setTexnica(e.target.value)}
                  
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="газель 5м"
                  onChange={(e)=>setGazelnew(e.target.value)}
                 
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="газель 4,30м"
                  onChange={(e)=>setGazelold(e.target.value)}
                  
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="состояния  барсика"
                  onChange={(e)=>setTractor(e.target.value)}
                 
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="кол башмаков"
                  onChange={(e)=>setBash(e.target.value)}
                 
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="кол связей"
                  onChange={(e)=>setConect(e.target.value)}
                 
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="кол настилов"
                  onChange={(e)=>setNastil(e.target.value)}
                 
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="кол проходных рам"
                  onChange={(e)=>setRama(e.target.value)}
                 
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="кол диагональ 2я"
                  onChange={(e)=>setRamadioganal(e.target.value)}
                 
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="кол ригелей"
                  onChange={(e)=>setRigel(e.target.value)}
                 
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="кол домкрат витовой"
                  onChange={(e)=>setJack(e.target.value)}
                 
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Имя зав склада"
                  onChange={(e)=>setUsername(e.target.value)}
                 
                />
              
            

        

            
              <button
                onClick={handleSubmit}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                 {/*  <LockClosedIcon className="h-5 w-5 text-black group-hover:text-indigo-400" aria-hidden="true" /> */}
                </span>
               Отправить
              </button>
            
             
                </form>
          </div>
          
        </div>
        
        </div>
        </div>
      
    )
}

export default Stock;