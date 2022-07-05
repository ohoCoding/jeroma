import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import WeatherDetailPage from './pages/Weather/Detail/index';
import WeatherMainPage from './pages/Weather/List/index';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/weather' element={<WeatherMainPage />} />
      <Route path='/weather/detail' element={<WeatherDetailPage />} />
    </Routes>
  );
}

export default App;
