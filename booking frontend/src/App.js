// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js'
import Details from './components/Details.js'
import Privatecomponent from './components/Privatecomponent.js'
import Login from './components/Login.js'
import Signup from './components/Signup'
import Mycareer from './components/Mycareer.js'
import Footer from './components/Footer.js'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      {/* <h1>Hii Buddy </h1> */}
      <Routes>
        <Route element = {<Privatecomponent/>}>
        <Route path='/' element={<Details/>}></Route>
        <Route path='/mycareer' element={<Mycareer/>}></Route>
        <Route path='/meetings' element={<h1>Meetings</h1>}></Route>
          <Route path='/logout' element={<h1>logout</h1>}></Route>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
