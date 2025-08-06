
import {BrowserRouter,Route,Routes} from "react-router";
import About from './pages/Home';
import Home from './pages/About';
function App() {
  return (
 <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />

 </Routes>    
     

  );
}

export default App;
  