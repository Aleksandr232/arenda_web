import { useState } from "react";
import axios from "axios";

import Menu from "./Menu";

const Tours = () =>{
    const token = localStorage.getItem('token');
    const [tours, setTours] = useState('');
    const [footing1_5, setFooting] = useState(''); 
           

    const handleFormReset = (e) => {
      e.target.reset();
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
      
        axios.put('https://xn--80aagge2ckkol0hd.xn--p1ai/api/stock/1', {
          tours,
           footing1_5,
          /*area0_45,
          rama1_2,
          rigel2,
          link0_7,
          rama1_1,
          emphasis,
          footing0_7,
          area07_15,
          rama0_7,
          rigel1_5,
          rama0_7_1,
          footing2_4,
          pipe,
          rama1_4,
          link0_9 */
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        
        )
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
                    <form onSubmit={handleSubmit} onReset={handleFormReset}>
                    {/* <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="количиство вышки-тур"
                    
                    onChange={(e) => setTours(e.target.value)}
                    /> */}
                     <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="основания 1,5"
                    
                    onChange={(e) => setFooting(e.target.value)}
                    type="number"
                    />
                    {/*<input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="площадка 0,45"
                    
                    onChange={(e) => setArea0_45(e.target.value)}
                    type="number"
                    />
                    <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="площадка 0,45"
                    
                    onChange={(e) => setArea0_45(e.target.value)}
                    type="number"
                    />
                    <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="рама 1*2"
                   
                    onChange={(e) => setRama1_2(e.target.value)}
                    type="number"
                    />
                    <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="ригель 2м"
                    
                    onChange={(e) => setRigel2(e.target.value)}
                    type="number"
                    />
                    <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="связи 0,7"
                    
                    onChange={(e) => setLink0_7(e.target.value)}
                    type="number"
                    />
                    <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="связи 0,7"
                    
                    onChange={(e) => setLink0_7(e.target.value)}
                    type="number"
                    />
                    <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="рама 1*1 м"
                    
                    onChange={(e) => setRama1_1(e.target.value)}
                    type="number"
                    />
                    <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="упор стабильности"
                    
                    onChange={(e) => setEmphasis(e.target.value)}
                    type="number"
                    />
                    <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="основание 0,7*2"
                    
                    onChange={(e) => setFooting0_7(e.target.value)}
                    type="number"
                    />
                    <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="площадка 0,7 * 1,5 м"
                    
                    onChange={(e) => setArea07_15(e.target.value)}
                    type="number"
                    />
                    <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="рама 0,7*2 м"
                    
                    onChange={(e) => setRama0_7(e.target.value)}
                    type="number"
                    />
                    <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="рама 0,7*2 м"
                    
                    onChange={(e) => setRama0_7(e.target.value)}
                    type="number"
                    />
                    <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="ригель 1,5 м"
                    
                    onChange={(e) => setRigel1_5(e.target.value)}
                    type="number"
                    />
                    <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="рама 0,7*1 м"
                   
                    onChange={(e) => setRama0_7_1(e.target.value)}
                    type="number"
                    />
                    <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="основание 2,4 м. с 2-мя колёсами"
                    
                    onChange={(e) => setFooting2_4(e.target.value)}
                    type="number"
                    />
                    <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="соединительная профильная труба 2 м"
                 
                    onChange={(e) => setPipe(e.target.value)}
                    type="number"
                    />
                    <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="рама 1,4*2 м"
                    
                    onChange={(e) => setRama1_4(e.target.value)}
                    type="number"
                    />
                    <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="связи 0,9 м"
                    
                    onChange={(e) => setLink0_9(e.target.value)}
                    type="number"
                    /> */}
                    
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