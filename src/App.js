import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <div>
      <Router>
           <Routes>
            <Route path='/' element={<Signup/>}/>
         <Route path='/loginpage' element={<Login/>}/>
        <Route path='/homepage'  element={<Home/>}/>
      
      </Routes>
      </Router>
     
       
    </div>
  );
}

export default App;
