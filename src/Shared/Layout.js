import React from 'react';
import { Outlet,Routes,Route} from 'react-router-dom';
import Home from '../Container/Home';
import SignUp from '../Container/SignUp';
import NotFound from '../Container/NotFound';
import Header from './Header';
import Login from '../Container/Login';

export default function Layout() {
    return (
        <div>
           
            <Outlet/>
            <Header/>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/signup' element={<SignUp/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
           
        </div>
    )
}
