import { useState } from "react";
import axios from "axios";

import Menu from "./Menu";

const Tours = () =>{
    const [tours, setTours] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
      
        axios.put('https://xn--80aagge2ckkol0hd.xn--p1ai/api/stock/1', {
          tours,
          username
        })
          .then((response) => {
            setTours('');
            setUsername('');
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      
      const handleFormReset = (e) => {
        e.target.reset();
      };

    return(
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
            <div className="mt-8 space-y-6" >
                <div className="rounded-md shadow-sm -space-y-px">
                    <form onSubmit={handleSubmit} onReset={handleFormReset}>
                    <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="количиство вышки-тур"
                    value={tours}
                    onChange={(e) => setTours(e.target.value)}
                    />
                    <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Имя зав склада"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    />
                    <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">Отправить</button>
                </form>
            </div>
        </div>
            </div>
                <Menu/>
            </div>
      
    )
}

export default Tours;