import { useState } from "react";
import axios from "axios";

import Menu from "./Menu";

const Texnic =()=>{
    const [tractor, setTractor] = useState('');
    const [texnica, setTexnica] = useState('');
    const [gazelnew, setGazelnew] = useState('');
    const [gazelold, setGazelold] = useState('');
    

    

    const handleFormReset = (e) => {
        e.target.reset();
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.put('https://xn--80aagge2ckkol0hd.xn--p1ai/api/stock/1',{
          texnica,
          tractor,
          gazelnew,
          gazelold,
          /*  headers: {
          Authorization: `Bearer ${tokens}`
          }  */
          
             
      })
      .then((response) => {
        handleFormReset(e);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
       
      };

    return(
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="mt-8 space-y-6" >
            <div className="rounded-md shadow-sm -space-y-px">
            <form onSubmit={handleSubmit} onReset={handleFormReset} action="">
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="isuzu"
                  onChange={(e)=>setTexnica(e.target.value)}
                  type='text'
                  
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="газель 5м"
                  onChange={(e)=>setGazelnew(e.target.value)}
                  type='text'
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="газель 4,30м"
                  onChange={(e)=>setGazelold(e.target.value)}
                  type='text'
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="состояния  барсика"
                  onChange={(e)=>setTractor(e.target.value)}
                  type='text'
                 
                />
                
              
            

        

            
              <button
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
        
        <Menu/>
        </div>
      
    )
}

export default Texnic;