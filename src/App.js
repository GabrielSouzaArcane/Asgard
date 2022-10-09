import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Page/Home';
import Horario from './Page/Horario'
import Historia from './Page/Historia'
import Trabalho from './Page/Trabalho'
import Menu from './Page/Menu'
import Informações from './Page/Informações';
import './App.css';

function App() {
  return (
    <Router className="App">
      <div >
        <header className="Menu">
          <Menu />
        </header>
        <body className='Fundo'>

          <Routes>
            <Route exact path="/Home" element={<Home />} />
            <Route path="/Historia" element={<Historia />} />
            <Route path="/Horario" element={<Horario />} />
            <Route path="/Trabalho" element={<Trabalho/>} />
            <Route path="/Informações" element={<Informações/>} />
          </Routes>

        </body>
        <footer>
          <ul>

            <li><h4>Contato:</h4></li>
            <li>(2020)85479-54658</li>
            <li>(2020)25478-56214</li>
            <li>(2020)25415-55256</li>
            <li>(2020)25145-55426</li>

          </ul>
          
          
          <ul>

          <li><h4>Deuses Nórdica:</h4></li>
            <li>Odin</li>
            <li>Thor</li>
            <li>Balder</li>
            <li>Loki</li>
            <li>Hel</li>
            <li>Tyr</li>
            <li>Heimdall</li>
            <li>Vidar</li>
            <li>Vígríôr</li>
            <li>Elli</li>
            <li>Vali</li>

          </ul>
           
          <ul>

            <li><h4>Mitologia Nórdica:</h4></li>
            <li>Valhala</li>
            <li>Midgard</li>
            <li>Yggdrasil</li>
            <li>Jotunheim</li>
            <li>Bifrost</li>
            <li>Álfheim</li>
            <li>Mímisbrunnr</li>
            <li>Poço de Urd</li>
            <li>Vígríôr</li>
            <li>Glitnir</li>
            <li>Ýdalir</li>
            <li>Fensalir</li>

         </ul>


        </footer>

      </div>
    </Router>
  );
}

export default App;
