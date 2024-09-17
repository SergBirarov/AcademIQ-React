import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../src/pages/LandingPage';
import LoginPage from '../src/pages/LoginPage';
import HomePage from '../src/pages/HomePage';
import CoursePage from '../src/pages/CoursePage';
import NotFoundPage from '../src/pages/NotFoundPage';
import ListComponent from "../src/components/ListComponent";
import TabPanel from "../src/components/TabPanel";
import ChartsOverview from "../src/components/ChartsOverview";

const AppRouter = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChartsOverview />} />
        <Route path="/1" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};



export default AppRouter;
