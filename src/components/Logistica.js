import { useEffect, useState } from "react";
import axios from "axios";


const Logistica=()=>{
  const token = localStorage.getItem('token');
  const [status, setStatus] = useState('данные скоро обновяться')
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            sendLocationToAPI(latitude, longitude);
          },
          (error) => {
            console.log(error);
          }
        );
      }, []);
    
      const sendLocationToAPI = (latitude, longitude) => {
        axios.post('https://xn--80aagge2ckkol0hd.xn--p1ai/api/logist', { latitude, longitude, status }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
}

export default Logistica;