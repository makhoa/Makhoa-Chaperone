import Link from "@material-ui/core/Link";
import './App.css'

import Dashboad from './components/Dashboad/Dashboad';
import Sidebar from "./components/Sidebar/Sidebar";

export default function App(){
  
  
  return (
    <div className="App">

      <div className="AppGlass">
       <Sidebar/> 
       <Dashboad/>
       
       
       
        
      </div>

     
    </div>
  );
}


