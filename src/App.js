import React, { Suspense } from 'react'
import { Routes, Route } from "react-router-dom"
import "./index.css";
import Nav from './components/navigation/index';
import Header from './components/header/Header';
import Loader from './components/share/loader/Loader';

const DashboardHome = React.lazy(() => import('./components/body-main/dashboard-home/DashboardHome'));
const SeoOptimization = React.lazy(() => import('./components/body-main/SeoEvent/SeoOptimization'));
const SeoOptimizationNew = React.lazy(() => import('./components/body-main/SeoEvent/SeoOptimizationNew'));
const OptimizationEditing = React.lazy(() => import('./components/body-main/SeoEvent/OptimizationEditing'));
const ProjectMaking = React.lazy(() => import('./components/body-main/suggetions/index'));
const Signin = React.lazy(() => import('./components/body-main/auth/signin'));
const SignUp = React.lazy(() => import('./components/body-main/auth/signup'));
const ForgotPassword = React.lazy(() => import('./components/body-main/auth/forgotpassword'));
const SEOranking = React.lazy(() => import('./components/body-main/analytics/SEOranking'));
const AnalyticsOverview = React.lazy(() => import('./components/body-main/analytics/AnalyticsOverview'));
const UserProfile = React.lazy(() => import('./components/body-main/analytics/UserProfile'));

const App = () => {

  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  )
}

export default App