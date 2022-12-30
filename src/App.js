import React from 'react'
import { Routes, Route } from "react-router-dom"
import "./index.css";
import Nav from './components/navigation/index';
import DashboardHome from './components/body-main/dashboard-home/DashboardHome';
import SeoOptimization from './components/body-main/SeoEvent/SeoOptimization';
import SeoOptimizationNew from './components/body-main/SeoEvent/SeoOptimizationNew';
import OptimizationEditing from './components/body-main/SeoEvent/OptimizationEditing';
import ProjectMaking from './components/body-main/suggetions/index';
import Signin from './components/body-main/auth/signin';
import SignUp from './components/body-main/auth/signup';
import ForgotPassword from './components/body-main/auth/forgotpassword';
import SEOranking from './components/body-main/analytics/SEOranking';
import AnalyticsOverview from './components/body-main/analytics/AnalyticsOverview';
import UserProfile from './components/body-main/analytics/UserProfile';
import Header from './components/header/Header';

const App = () => {

  return (
    <main className='main-wrapper-box'>
      <Header />
      <div className="app-body">
        <div className="app-body-navigation">
          <div className="navigation">
            <Nav />
          </div>
        </div>
        <div className="app-body-main-content">
          <Routes>
            <Route path="/" element={<Signin />} />
          </Routes>
          <Routes>
            <Route path="/seooptimization" element={<SeoOptimization />} />
          </Routes>
          <Routes>
            <Route path="/seooptimization/new" element={<SeoOptimizationNew />} />
          </Routes>
          <Routes>
            <Route path="/optimizationediting" element={<OptimizationEditing />} />
          </Routes>
          <Routes>
            <Route path="/projectmaking" element={<ProjectMaking />} />
          </Routes>
          {/* <Routes>
            <Route path="/ProjectMakingTags" element={<ProjectMakingTags />} />
          </Routes> */}
          <Routes>
            <Route path="/works" element={<DashboardHome />} />
          </Routes>
          {/* <Routes>
            <Route path="/ProjectMakingRecheck" element={<ProjectMakingRecheck />} />
          </Routes> */}
          <Routes>
            <Route path="/SEOranking" element={<SEOranking />} />
          </Routes>
          <Routes>
            <Route path="/dashboard" element={<AnalyticsOverview />} />
          </Routes>
          <Routes>
            <Route path="/UserProfile" element={<UserProfile />} />
          </Routes>

        </div>
      </div>
      <Routes>
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes><Routes>
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </main>
  )
}

export default App