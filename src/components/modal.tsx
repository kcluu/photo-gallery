import React from "react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <div
      onClick={onClose}
      id="modal"
      className={`fixed inset-0 flex justify-center items-center visible bg-black/20 animate-fade-up animate-duration-500`}
    >
      <div
        className={`relative bg-white pt-6 pb-6 pr-8 pl-8 transition-all w-[calc(100vw-300px)] max-w-screen-xl h-[calc(100vh-50px)] max-h-[700px]`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute top-0 right-0 m-4" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        {children}
      </div>
    </div>
  );
};
