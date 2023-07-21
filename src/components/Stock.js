import { useNavigate, Link } from 'react-router-dom'
import Menu from "./Menu";

const Stock = () => { 
  const navigate = useNavigate();

  const navigateToLesa = () => {
    navigate('/lesa')
  };
  
  const navigateToTechnika = () => {
    navigate('/texnic')
  };
  
  const navigateToVyshkiTury = () => {
    navigate('/tours')
  };
    
    return(
      <div className="buttonContainer">
      <button onClick={navigateToLesa} className="statusButton">
        Леса
      </button>
      <button onClick={navigateToTechnika} className="statusButton" >
        Техника
      </button>
      <button onClick={navigateToVyshkiTury} className="statusButton" >
       Вышки-туры
      </button>
      <Menu/>
    </div>
    )
}

export default Stock;