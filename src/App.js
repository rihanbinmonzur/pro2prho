
import {BrowserRouter,Route,Routes} from "react-router";
import Home  from './pages/Home';
import About from './pages/About';

 /* admin route */
 import Dashboard from './Admin/Dashboard';
 import Users from './Admin/Users';
 import Useradd from './Admin/Useradd';
 



function App() {
  return (
 <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />


    {/* Admin route*/}

    <Route path="/admin/dashboard" element={<Dashboard />} />
    <Route path="/admin/user" element={<Users/>} />
    <Route path="/admin/useradd" element={<Useradd/>} />

   
 </Routes>    
     

  );
}

export default App;
  