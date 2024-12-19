import React, { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="/what-we-do" className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">What We Do</a>
                <a href="/research" className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Research</a>
                <a href="/stories" className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Stories</a>
                <a href="/take-action" className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Take Action</a>
                <a href="/chat" className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-md text-sm font-medium">Chat with Billy</a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/what-we-do" className="text-blue-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">What We Do</a>
            <a href="/research" className="text-blue-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Research</a>
            <a href="/stories" className="text-blue-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Stories</a>
            <a href="/take-action" className="text-blue-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Take Action</a>
            <a href="/chat" className="bg-yellow-500 text-blue-900 block px-3 py-2 rounded-md text-base font-medium">Chat with Billy</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;