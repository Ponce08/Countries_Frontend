import { Routes, Route } from 'react-router-dom';
import Welcome from './components/welcome/Welcome';
import Home from './components/home/Home';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.baseURL = 'https://countriesback-production-2944.up.railway.app/';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/crear_actividad" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
