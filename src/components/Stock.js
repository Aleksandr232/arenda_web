import { useNavigate } from 'react-router-dom';
import Menu from "./Menu";

const Stock = ({username}) => { 
  const navigate = useNavigate();

  const tokens = localStorage.getItem('token');
  const navigateToLesa = () => {
    navigate('/lesa');
  };

  const navigateToTechnika = () => {
    navigate('/texnic');
  };

  const navigateToVyshkiTury = () => {
    navigate('/tours');
  };

  const home = ()=>{
    navigate('/');
    /* return null; */
  }

  if (tokens) {
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
        <Menu/>
      </div>
    )
  } else {
    home();
   
  }
}

export default Stock;