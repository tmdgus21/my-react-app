import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import CardClickPage from "./pages/CardClickPage";
import PrivateRoute from "./routes/PrivateRoute";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/card-detail/:title/:artist"
          element={
            <PrivateRoute>
              <CardClickPage />
            </PrivateRoute>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
