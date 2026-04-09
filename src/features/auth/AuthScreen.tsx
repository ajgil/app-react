import React, { useState } from "react";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { OTPVerification } from "./components/OTPVerification";
import { RoleSelection } from "./components/RoleSelection";
import { CrewOnboarding } from "../crew/onboarding/CrewOnboarding";
import { RecruiterOnboarding } from "../recruiter/onboarding/RecruiterOnboarding";

export const AuthScreen: React.FC<{ onLoginSuccess: () => void }> = ({ onLoginSuccess }) => {
  const [currentView, setCurrentView] = useState<"login" | "signup" | "otp" | "selection" | "onboarding-crew" | "onboarding-recruiter">("login");
  const [email, setEmail] = useState("user@example.com");

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[#F9FAFB] p-6">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#062046_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="w-full max-w-[696px] z-10 flex justify-center">
        {currentView === "login" && (
          <Login 
            onRegisterClick={() => setCurrentView("signup")} 
            onLoginSuccess={onLoginSuccess}
          />
        )}
        
        {currentView === "signup" && (
          <Signup 
            onLoginClick={() => setCurrentView("login")} 
            onSignupSuccess={() => setCurrentView("otp")}
          />
        )}

        {currentView === "otp" && (
          <OTPVerification 
            email={email}
            onVerify={(code) => {
              console.log("Verificando:", code);
              setCurrentView("selection");
            }}
            onResend={() => console.log("Reenviando...")}
          />
        )}

        {currentView === "selection" && (
          <RoleSelection 
            onRoleSelected={(role) => {
              console.log("Rol seleccionado:", role);
              if (role === "crew") {
                setCurrentView("onboarding-crew");
              } else if (role === "employer") {
                setCurrentView("onboarding-recruiter");
              } else {
                onLoginSuccess();
              }
            }}
          />
        )}

        {currentView === "onboarding-crew" && (
          <CrewOnboarding onComplete={onLoginSuccess} />
        )}

        {currentView === "onboarding-recruiter" && (
          <RecruiterOnboarding onComplete={onLoginSuccess} />
        )}
      </div>
    </div>
  );
};
