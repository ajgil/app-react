import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardScreen } from './features/dashboard/DashboardScreen';
import { AuthLayout } from './features/auth/AuthLayout';
import { Login } from './features/auth/components/Login';
import { Signup } from './features/auth/components/Signup';
import { OTPVerification } from './features/auth/components/OTPVerification';
import { RoleSelection } from './features/auth/components/RoleSelection';
import { CrewOnboarding } from './features/crew/onboarding/CrewOnboarding';
import { RecruiterOnboarding } from './features/recruiter/onboarding/RecruiterOnboarding';
import CrewDashboardAvailableNow from './features/crew/dashboard/CrewDashboardAvailableNow';
import CrewProfilePersonalInfoNoFreeChanges from './features/crew/profile/CrewProfilePersonalInfoNoFreeChanges';
import CrewJobsMainView from './features/crew/jobs/CrewJobsMainView';
import CrewJobMapView from './features/crew/jobs/CrewJobMapView';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

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

        {/* Dashboard Routes */}
        <Route 
          path="/dashboard" 
          element={isLoggedIn ? <DashboardScreen /> : <Navigate to="/auth/login" replace />} 
        />
        <Route 
          path="/dashboard/crew" 
          element={<CrewDashboardAvailableNow />} 
        />
        <Route 
          path="/dashboard/crew/profile" 
          element={<CrewProfilePersonalInfoNoFreeChanges />} 
        />
        <Route 
          path="/dashboard/crew/jobs" 
          element={<CrewJobsMainView />} 
        />
        <Route 
          path="/dashboard/crew/map" 
          element={<CrewJobMapView />} 
        />

        {/* Fallback */}
        <Route path="/" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
