import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Menu from "./Menu";




const Stock = () => { 
  const navigate = useNavigate();
  const token = useSelector((state)=>state.token);
  const navigateToLesa = () => {
    navigate('/lesa');
  };

  const navigateToTechnika = () => {
    navigate('/texnic' );
  };

  const navigateToVyshkiTury = () => {
    navigate('/tours');
  };


  useEffect(() => {
    // Получаем токен из localStorage
    
  
    // Проверяем наличие токена
    if (token) {
      // Логика для запроса данных пользователя
      axios
        .get("https://xn--80aagge2ckkol0hd.xn--p1ai/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // Сохраняем полученные данные пользователя в состояние
          console.log(response.data);
        })
        .catch((error) => {
          // Обрабатываем ошибку запроса
          console.error(error);
          alert("Произошла ошибка. Попробуйте снова позднее.");
        });
    } else {
      // Если токена нет, перенаправляем пользователя на страницу авторизации
      navigate("/");
    }
  }, []);


  async function handleLogout() {  
    if (localStorage.getItem('token')) {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch("https://xn--80aagge2ckkol0hd.xn--p1ai/api/logout", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                alert("Произошла ошибка. Попробуйте снова позднее.");
            }

            localStorage.removeItem('token'); // Удаляем токен из localStorage
            navigate("/");
        } catch (error) {
            console.error(error);
            alert("Произошла ошибка. Попробуйте снова позднее.");
        }
    }
}
 
  
 

  

  
    return (
      <div className="buttonContainer">
        <button onClick={navigateToLesa} className="statusButton">
          Леса
        </button>
        <button onClick={navigateToTechnika} className="statusButton">
          Техника
        </button>
        <button onClick={navigateToVyshkiTury} className="statusButton">
          Вышки
        </button>
        <div onClick={handleLogout}>exit</div>
        
        <Menu/>
      </div>
    )
  
}

export default Stock;