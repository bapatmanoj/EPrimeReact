import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Layout from './Shared/Layout';
import 'bootstrap/dist/css/bootstrap.css';
export default function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/*" element={<Layout/>}/>
      </Routes>
    </div>
  )
}

