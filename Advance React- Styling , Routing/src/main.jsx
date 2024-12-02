import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Jsonaxios from './Jsonaxios.jsx'
import AddUser from './AddUser.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TableDsp from './TableDsp.jsx'
import FakeAPI from './AdvanceReact/FakeAPI.jsx'
import FakeapiTable from './AdvanceReact/FakeapiTable.jsx'
import Websiteinfo from './AdvanceReact/Websiteinfo.jsx'
import Slider from './AdvanceReact/Slider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Jsonaxios />
    <BrowserRouter>
      <Routes>
        <Route path='/adduser' element={<AddUser />} />
      </Routes>
    </BrowserRouter>
    <TableDsp /> */}


    <Websiteinfo/>
    <Slider/>
    <FakeAPI />
    <FakeapiTable />
  </StrictMode>
)
