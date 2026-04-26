import React from "react";
import { useState } from "react";
import ConfirmationModal from "../components/common/ConfirmationModal";

export interface UseLogoutModalReturn {
  showLogoutModal: boolean;
  setShowLogoutModal: (show: boolean) => void;
  LogoutConfirmationModal: React.FC<{ onConfirm?: () => void | Promise<void> }>;
}

export const useLogoutModal = (): UseLogoutModalReturn => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const LogoutConfirmationModal: React.FC<{ onConfirm?: () => void | Promise<void> }> = ({
    onConfirm,
  }) => {
    const handleLogout = async () => {
      if (onConfirm) {
        await onConfirm();
      } else {
        // Default logout behavior
        // Add your logout logic here
        // e.g., clear localStorage, redirect to login, etc.
      }
    };

    return (
      <ConfirmationModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
        title="Are you sure?"
        message="Are you sure you want to logout? You will be redirected to the login page."
        confirmText="Confirm Logout"
        cancelText="Cancel"
        isDangerous={false}
      />
    );
  };

  return {
    showLogoutModal,
    setShowLogoutModal,
    LogoutConfirmationModal,
  };
};
