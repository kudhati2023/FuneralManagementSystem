import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Layout from './components/layout/Layout';
import { theme } from './theme';
import { AuthProvider } from './context/AuthContext';

// Auth and Dashboard components
const LoginPage = React.lazy(() => import('./components/auth/LoginPage'));
const ProtectedRoute = React.lazy(() => import('./components/auth/ProtectedRoute').then(module => ({ default: module.ProtectedRoute })));
const StaffDashboard = React.lazy(() => import('./components/dashboards/StaffDashboard'));
const FamilyDashboard = React.lazy(() => import('./components/dashboards/FamilyDashboard'));

// List components
const DeceasedRecordList = React.lazy(() => import('./components/lists/DeceasedRecordList'));
const BurialOrderList = React.lazy(() => import('./components/lists/BurialOrderList'));
const PaymentList = React.lazy(() => import('./components/lists/PaymentList'));
const PlotList = React.lazy(() => import('./components/lists/PlotList'));
const FuneralSchedule = React.lazy(() => import('./components/calendar/FuneralSchedule'));
const DriverSchedule = React.lazy(() => import('./components/scheduling/DriverSchedule'));

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Layout>
            <Suspense fallback={<div>Loading...</div>}> {/* Added Suspense for lazy loading */}
              <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<Navigate to="/login" replace />} />

                {/* Staff Routes */}
                <Route 
                  path="/staff/*" 
                  element={
                    <ProtectedRoute role="staff">
                      <StaffDashboard />
                    </ProtectedRoute>
                  }
                >
                  <Route path="deceased" element={<DeceasedRecordList />} />
                  <Route path="burial-orders" element={<BurialOrderList />} />
                  <Route path="plots" element={<PlotList />} />
                  <Route path="payments" element={<PaymentList />} />
                  <Route path="schedule" element={<FuneralSchedule />} />
                  <Route path="drivers" element={<DriverSchedule />} />
                </Route>

                {/* Family Routes */}
                <Route 
                  path="/family/*" 
                  element={
                    <ProtectedRoute role="family">
                      <FamilyDashboard />
                    </ProtectedRoute>
                  }
                />
                {/* Catch all route */}
                <Route path="*" element={<Navigate to="/login" replace />} />
              </Routes>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;