import { useEffect } from "react";
import axios from "axios";


const Logistica=()=>{
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
        axios.post('https://xn--80aagge2ckkol0hd.xn--p1ai/api/logist', { latitude, longitude })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
}

export default Logistica;