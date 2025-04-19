import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from '../src/Components/Register'
import Login from '../src/Components/login'
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/"  exact element={<Login />} />
        <Route path="/login"  exact element={<Login />} />
        <Route path="/register" exact  element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
