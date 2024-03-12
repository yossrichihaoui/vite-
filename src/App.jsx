

import { Route, Routes } from 'react-router-dom';
import './App.css'
import Productlist from './component/Productlist'
import 'bootstrap/dist/css/bootstrap.min.css';
import Productdetaille from './component/Productdetaille';


function App() {
  
  return (
    <>
     <Routes>
      <Route path='/' element={ <Productlist/>}/>
      <Route path='/product/:id' element={ <Productdetaille/>}/>
     </Routes>
    </>
  )
}

export default App
