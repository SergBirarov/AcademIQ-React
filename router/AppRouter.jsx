import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../src/pages/LandingPage';
import LoginPage from '../src/pages/LoginPage';
import HomePage from '../src/pages/HomePage';
import CoursePage from '../src/pages/CoursePage';
import NotFoundPage from '../src/pages/NotFoundPage';
import TabPanel from "../src/components/TabPanel";
import ChartsOverview from "../src/components/ChartsOverview";
import PasswordReset from '../src/components/auth/PasswordReset';
import TempComp from '../src/pages/TempComp';

const AppRouter = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/grades" element={<NotFoundPage />} />
        <Route path="/system" element={<NotFoundPage />} />
        <Route path="/tasks" element={<TabPanel />} />
        <Route path="/calendar" element={<NotFoundPage />} />
        <Route path="/performance-analysis" element={<ChartsOverview />} />
        <Route path="/personal-area" element={<NotFoundPage />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/temp" element={<TempComp />} />
      </Routes>
    </Router>
  );
};



export default AppRouter;
