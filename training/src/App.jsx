import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Classroom from './pages/Classroom';
import Assessment from './pages/Assessment';
import Store from './pages/Store';
import Calender from './pages/Calender';
import News from './pages/News';
import Blog from './pages/Blog';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';

import MyAccount from './pages/MyAccount';
import MySettings from './pages/MySettings';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/classroom' element={<Classroom />} />
        <Route path='/assessment' element={<Assessment />} />
        <Route path='/store' element={<Store />} />
        <Route path='/calender' element={<Calender />} />
        <Route path='/news' element={<News />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/profile' element={<profile />}>
          <Route path='/profile/myaccount' element={<MyAccount />} />
          <Route path='/profile/mysetting' element={<MySettings />} />
          <Route path='*' element={<PageNotFound />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
