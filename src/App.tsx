import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardScreen } from './features/dashboard/DashboardScreen';
import { AuthLayout } from './features/auth/AuthLayout';
import { Login } from './features/auth/components/Login';
import { Signup } from './features/auth/components/Signup';
import { OTPVerification } from './features/auth/components/OTPVerification';
import { RoleSelection } from './features/auth/components/RoleSelection';
import { CrewOnboarding } from './features/crew/onboarding/CrewOnboarding';
import { RecruiterOnboarding } from './features/recruiter/onboarding/RecruiterOnboarding';

function App() {
  // Simple auth state for demo purposes
  const isLoggedIn = false; 

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="otp" element={<OTPVerification />} />
          <Route path="role-selection" element={<RoleSelection />} />
        </Route>

        {/* Onboarding Routes */}
        <Route path="/onboarding/crew" element={<CrewOnboarding onComplete={() => {}} />} />
        <Route path="/onboarding/recruiter" element={<RecruiterOnboarding onComplete={() => {}} />} />

        {/* Protected Dashboard Route */}
        <Route 
          path="/dashboard" 
          element={isLoggedIn ? <DashboardScreen /> : <Navigate to="/auth/login" replace />} 
        />

        {/* Fallback */}
        <Route path="/" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
