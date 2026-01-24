import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title, maxWidth = '4xl' }) => {
  if (!isOpen) return null;

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl',
  };

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="flex min-h-full items-center justify-center p-4 relative z-[10000]">
        <div
          className={`relative w-full ${maxWidthClasses[maxWidth]} bg-white dark:bg-[#1a2632] rounded-xl shadow-2xl transform transition-all`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          {title && (
            <div className="flex items-center justify-between border-b border-[#dbe0e6] dark:border-[#2d3a4b] px-6 py-4">
              <h2 className="text-2xl font-black text-[#111418] dark:text-white">{title}</h2>
              <button
                onClick={onClose}
                className="text-[#617589] hover:text-[#111418] dark:hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>
          )}

          {/* Body */}
          <div className="max-h-[calc(100vh-200px)] overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
