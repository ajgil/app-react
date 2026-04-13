import { toast, type ToastOptions } from 'react-toastify';

/**
 * Custom hook para mostrar notificaciones toast
 * Simplifica el uso de react-toastify en toda la aplicación
 * 
 * Uso:
 * const { showSuccess, showError, showWarning, showInfo } = useToast();
 * showSuccess('¡Operación completada!');
 * showError('Ocurrió un error');
 */
export const useToast = () => {
  const defaultOptions: ToastOptions = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

  const showSuccess = (message: string, options?: ToastOptions) => {
    toast.success(message, { ...defaultOptions, ...options });
  };

  const showError = (message: string, options?: ToastOptions) => {
    toast.error(message, { ...defaultOptions, ...options });
  };

  const showWarning = (message: string, options?: ToastOptions) => {
    toast.warning(message, { ...defaultOptions, ...options });
  };

  const showInfo = (message: string, options?: ToastOptions) => {
    toast.info(message, { ...defaultOptions, ...options });
  };

  const showLoading = (message: string, options?: ToastOptions) => {
    return toast.loading(message, { ...defaultOptions, ...options });
  };

  const updateToast = (toastId: string | number, options: ToastOptions & { render?: string }) => {
    toast.update(toastId, options);
  };

  const dismiss = (toastId?: string | number) => {
    if (toastId) {
      toast.dismiss(toastId);
    } else {
      toast.dismiss();
    }
  };

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
    showLoading,
    updateToast,
    dismiss,
  };
};
