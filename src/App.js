// App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import SignInForm from './components/Login';
import SignUpForm from './components/Signup';
import GirlbandsPage from './pages/Girlbands';
import BlackpinkPage from './pages/Blackpink';
import BoybandsPage from './pages/Boybands';
import SeventeenPage from './pages/Seventeen';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/girlbands" element={<GirlbandsPage />} />
      <Route path = "/blackpink" element = {<BlackpinkPage/>} />
      <Route path = "/boybands" element={<BoybandsPage/>} />
      <Route path = "/seventeen" element = {<SeventeenPage/>} />
    </Routes>
  );
};

export default App;
