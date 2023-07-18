import { useState } from "react";
import Logistica from "./Logistica";
import Menu from "./Menu";
import axios from 'axios';

const Truck=()=>{
    const [message, setMessage] = useState('');

    const updateStatus = async (status) => {
        try {
          const response = await axios.put(`https://xn--80aagge2ckkol0hd.xn--p1ai/api/logiststatus/1`, { status });
    
          if (response.status === 200) {
            setMessage('Статус успешно обновлен');
          } else {
            setMessage('Ошибка при обновлении статуса');
          }
        } catch (error) {
          console.error(error);
        }
      }

    return(
        <div className="buttonContainer">
        <button className="statusButton" onClick={() => updateStatus('в пути')}>
          В пути
        </button>
        <button className="statusButton" onClick={() => updateStatus('на месте')}>
          На месте
        </button>
        <button className="statusButton" onClick={() => updateStatus('еду на склад')}>
         на склад
        </button>
        <Logistica/>
        <Menu/>
      </div>
    )
} 

export default Truck;