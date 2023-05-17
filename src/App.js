import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Game1 from './Components/Game1/Game'
import Game2 from './Components/Game2/Game'
import Game3 from './Components/Game3/Game3'
import {Routes, Route} from 'react-router-dom'
import Nav from './Components/Nav';
function App() {
  return (
  <>
  <Nav/>
  <Routes>
    <Route path='/' element={<Game1/>}/>
    <Route path='/game1' element={<Game1/>}/>
    <Route path='/game2' element={<Game2/>}/>
    <Route path='/game3' element={<Game3/>}/>
  </Routes>

  </>
  );
}

export default App;
