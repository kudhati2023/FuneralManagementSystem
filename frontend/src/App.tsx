import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Layout from './components/layout/Layout';
import { theme } from './theme';
import { AuthProvider } from './context/AuthContext';

// Auth and Dashboard components
import LoginPage from './components/auth/LoginPage';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import StaffDashboard from './components/dashboards/StaffDashboard';
import FamilyDashboard from './components/dashboards/FamilyDashboard';

// List components
import DeceasedRecordList from './components/lists/DeceasedRecordList';
import BurialOrderList from './components/lists/BurialOrderList';
import PaymentList from './components/lists/PaymentList';
import PlotList from './components/lists/PlotList';
import FuneralSchedule from './components/calendar/FuneralSchedule';
import DriverSchedule from './components/scheduling/DriverSchedule';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Layout>
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
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
