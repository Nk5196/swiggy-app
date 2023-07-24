import './App.css';
import Body from './Components/Body/Body';
import Navbar from './Components/Navbar/Navbar';
import Corousel from './Components/Corousel/Corousel.js';

function App() {
  return (
    <div className="body">
   
      <Navbar/>  
      <Corousel/>
      <Body></Body> 
    </div>
  );
}

export default App;
