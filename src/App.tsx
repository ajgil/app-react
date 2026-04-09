import { useState } from 'react';
import { DashboardScreen } from './features/dashboard/DashboardScreen';
import { AuthScreen } from './features/auth/AuthScreen';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <DashboardScreen />
  ) : (
    <AuthScreen onLoginSuccess={() => setIsLoggedIn(true)} />
  );
}

export default App
