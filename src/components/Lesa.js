import { useState } from "react";
import Menu from "./Menu";
import axios from "axios";
import { useSelector } from 'react-redux';

const Lesa=()=>{
    const token = useSelector((state)=>state.token);
    const username = useSelector((state)=>state.name);
    const [lesa, setLesa] = useState('');
    const [rama, setRama] = useState('');
    const [ramadioganal, setRamadioganal] = useState('');
    const [conect, setConect] = useState('');
    const [nastil, setNastil] = useState('');
    const [rigel, setRigel] = useState('');
    const [bash, setBash] = useState('');
    const [jack, setJack] = useState('');

  
    
    const handleFormReset = (e) => {
        e.target.reset();
      };

    const handleSubmit = (e) => {
      e.preventDefault();
      
      axios.put('https://xn--80aagge2ckkol0hd.xn--p1ai/api/stock/1',{
        username,
        lesa,
        rama,
        rigel,
        ramadioganal,
        bash,
        jack,
        nastil,
        conect,
        headers: {
          Authorization: `Bearer ${token}`,
        }
           
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
          {/* <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Войти в аккаунт</h2>
            <p className="mt-2 text-center text-sm text-gray-600"></p>
          </div> */}
          
          <div className="mt-8 space-y-6" >
            <div className="rounded-md shadow-sm -space-y-px">
            <form onSubmit={handleSubmit} onReset={handleFormReset} action="">
              <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="количиство рам с лестницей"
                  onChange={(e)=>setLesa(e.target.value)}
                  type='number'
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="кол башмаков"
                  onChange={(e)=>setBash(e.target.value)}
                  type='number'
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="кол связей"
                  onChange={(e)=>setConect(e.target.value)}
                  type='number'
                 
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="кол настилов"
                  onChange={(e)=>setNastil(e.target.value)}
                  type='number'
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="кол проходных рам"
                  onChange={(e)=>setRama(e.target.value)}
                  type='number'
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="кол диагональ 2я"
                  onChange={(e)=>setRamadioganal(e.target.value)}
                  type='number'
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="кол ригелей"
                  onChange={(e)=>setRigel(e.target.value)}
                  type='number'
                />
                <input
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="кол домкрат витовой"
                  onChange={(e)=>setJack(e.target.value)}
                  type='number'
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

export default Lesa;


