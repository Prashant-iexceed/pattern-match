import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Counter from './components/Counter/Counter'
import Error404 from './components/Errror404'
import SignUp from './Authentication/SignUp/SignUp'
import Login from './Authentication/Login/Login'
import MainLayout from './pages/User/MainLayout'
import AdminLayout from './pages/Admin/AdminLayout'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Counter />} exact />
      <Route path="/login" element={<Login />} exact />
      <Route path="/signup" element={<SignUp />} exact />
      <Route path="/admin/*" element={<AdminLayout />} exact />
      <Route path="/user/*" element={<MainLayout />} exact />
      <Route path="/*" element={<Error404 />} exact />
    </Routes>
  )
}

export default AppRoutes
