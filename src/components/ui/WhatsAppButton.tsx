import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '919600118359';
  const message = 'Hello! I am interested in your interior design services.';

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
        {isOpen && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 w-80 animate-scaleIn border-2 border-peacock-500">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Chat with us
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Have questions about our interior design services? Chat with us on WhatsApp!
            </p>
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 shadow-lg hover:animate-jelly"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start Chat</span>
            </a>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-liquidFloat group hover:animate-jelly"
          aria-label="WhatsApp Chat"
        >
          <div className="absolute inset-0 bg-[#25D366] rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity animate-blob"></div>
          {isOpen ? (
            <X className="w-6 h-6 relative z-10" />
          ) : (
            <MessageCircle className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
          )}
        </button>

        <div className="absolute -top-3 -right-3 w-4 h-4 bg-red-500 rounded-full animate-elasticPulse"></div>
      </div>
    </>
  );
}
