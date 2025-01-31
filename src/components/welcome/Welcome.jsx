import './welcome.css';
import fondo_welcome from './banderas-del-mundo-tapa.jpg';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="content_welcome">
      <div className="content_titulo_button">
        <h1 className="titulo_welcome">Bienvenidos</h1>
        <Link to={'/home'}>
          <button className="button_welcome">Empezar</button>
        </Link>
      </div>
      <div className="content_fondo">
        <img src={fondo_welcome} alt="banderas-del-mundo-tapa.jpg" />
      </div>
    </div>
  );
};

export default Welcome;
