import { type FunctionComponent } from "react";
import { useLogoutModal } from "../../hooks/useLogoutModal";
import { useToast } from "../../hooks/useToast";

/**
 * LogoutButton Component
 * 
 * This is an example component that demonstrates how to use the useLogoutModal hook.
 * Place this button wherever you need logout functionality in your app (Header, Sidebar, ProfileMenu, etc.)
 * 
 * Usage:
 * <LogoutButton />
 */
const LogoutButton: FunctionComponent = () => {
  const { setShowLogoutModal, LogoutConfirmationModal } = useLogoutModal();
  const { showInfo } = useToast();

  const handleLogout = async () => {
    // Implement your logout logic here
    // Examples:
    // - Clear authentication tokens from localStorage/sessionStorage
    // - Call an API endpoint to invalidate the session
    // - Redirect to login page
    // - Clear user context/state

    showInfo("You have been logged out successfully");
    // Navigate to login or handle redirect
    // window.location.href = '/login';
  };

  return (
    <>
      <button
        onClick={() => setShowLogoutModal(true)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#ef4444] hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
        Logout
      </button>

      <LogoutConfirmationModal onConfirm={handleLogout} />
    </>
  );
};

export default LogoutButton;
