import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/Navigation/Navigation.component';
import HomePage from './routes/Home/Home.component';
import SignInPage from './routes/SignIn/SignIn.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="sign-in" element={<SignInPage />} />
      </Route>
    </Routes>
  );
};

export default App;
