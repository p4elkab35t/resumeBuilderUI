import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import SignInPage from './pages/Auth/SignInPage';
// import DashboardLayout from './components/layout/DashboardLayout';
// import DashboardPage from './pages/Dashboard/DashboardPage';
// import CreateResumePage from './pages/Resumes/CreateResumePage';
// import EditResumePage from './pages/Resumes/EditResumePage';
// import ResumeDetailPage from './pages/Resumes/ResumeDetailPage';
// import UploadResumePage from './pages/Resumes/UploadResumePage';
// import DownloadHistoryPage from './pages/Dashboard/DownloadHistoryPage';
// import NotFoundPage from './pages/Errors/NotFoundPage';
import ErrorPage from './pages/Error.page';
import Layout from './layout/Deafult.layout';
import Dashboard from './pages/Dashboard.page';
import StarterPage from './pages/Starter.page';

const RoutesConfig: React.FC = () => {
  return (
   <Layout>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<StarterPage />} />
      {/* <Route path="/" element={<SignInPage />} /> */}
      {/* <Route path="/dashboard" element={<DashboardLayout><DashboardPage /></DashboardLayout>} />
      <Route path="/resumes/create" element={<DashboardLayout><CreateResumePage /></DashboardLayout>} />
      <Route path="/resumes/edit/:id" element={<DashboardLayout><EditResumePage /></DashboardLayout>} />
      <Route path="/resumes/:id" element={<DashboardLayout><ResumeDetailPage /></DashboardLayout>} />
      <Route path="/upload" element={<DashboardLayout><UploadResumePage /></DashboardLayout>} />
      <Route path="/download-history" element={<DashboardLayout><DownloadHistoryPage /></DashboardLayout>} /> */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Layout>
  );
};

export default RoutesConfig;
