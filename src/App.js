import './App.css';
import Body from './Components/Body/Body';
import Navbar from './Components/Navbar/Navbar';
import Corousel from './Components/Corousel/Corousel.js';
import About from './Components/About/About';
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <div className="body">   
      <Navbar/>  
      <Outlet></Outlet>
    </div>
  );
}



export default App;
