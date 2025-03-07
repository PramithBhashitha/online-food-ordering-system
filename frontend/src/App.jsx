import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import { Route, Routes, Navigate  } from 'react-router-dom'
import Register from './pages/Register'
import Products from './pages/Products'
import AdminHome from './pages/adminDashboard/AdminHome'
import AdminProducts from './pages/adminDashboard/AdminProducts'
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Users from './pages/adminDashboard/Users'
import Orders from './pages/adminDashboard/Orders'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute allowedRoles={["ADMIN", "USER"]} />}>
        <Route path="/home" element={<Home />} />
        <Route path="/products/:category" element={<Products />} />
      </Route>
      

      {/* Protected Route for Admin */}
      <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
        <Route path="/admin" element={<AdminHome />}>
          <Route index element={<AdminProducts />} />
          <Route path="users" element={<Users />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Route>

      {/* Redirect unknown routes to home */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
