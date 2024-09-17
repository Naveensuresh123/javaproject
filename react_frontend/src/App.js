import React from 'react'
import ListEmployeeComponent from'./components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent'
import CreateEmployeeComponent from './components/CreateEmployeeComponent'

export default function App() {
  return (
    <div>
    <HeaderComponent/>
    <BrowserRouter>
    <div className='container'>
      <Routes>
            <Route exact path='/'  element={<ListEmployeeComponent/>}></Route>

            <Route path='/employees'element={<ListEmployeeComponent/>}></Route>
            <Route path='/add-Employee' element={<CreateEmployeeComponent/>}></Route>
            <Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>}></Route>
      </Routes>
      </div>
      </BrowserRouter>
      <FooterComponent/>
    </div>
  )
}

