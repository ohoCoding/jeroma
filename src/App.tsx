import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import WeatherMainPage from './pages/Weather';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/weather' element={<WeatherMainPage />} />
    </Routes>
  );
}

export default App;
