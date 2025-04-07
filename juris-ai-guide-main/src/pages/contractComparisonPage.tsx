import React from 'react';
import { FileText, Settings, User, Home, HelpCircle, LogOut, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContractComparison from '../components/ContractComparison'; // Import the component we created earlier

const ContractComparisonPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-600">Contract Analyzer</h1>
        </div>
        
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <Link 
                to="/dashboard" 
                className="flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600"
              >
                <Home className="w-5 h-5 mr-3" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/analyzer" 
                className="flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600"
              >
                <FileText className="w-5 h-5 mr-3" />
                <span>Single Contract</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/comparison" 
                className="flex items-center px-4 py-3 text-blue-600 bg-blue-50 rounded-lg font-medium"
              >
                <FileText className="w-5 h-5 mr-3" />
                <span>Contract Comparison</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/settings" 
                className="flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600"
              >
                <Settings className="w-5 h-5 mr-3" />
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/help" 
                className="flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600"
              >
                <HelpCircle className="w-5 h-5 mr-3" />
                <span>Help & Support</span>
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="mt-auto pt-4 border-t border-gray-200">
          <div className="flex items-center px-4 py-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
              <User className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-medium">Alex Johnson</p>
              <p className="text-xs text-gray-500">alex@example.com</p>
            </div>
          </div>
          <button className="mt-2 w-full flex items-center px-4 py-2 text-gray-600 rounded-lg hover:bg-red-50 hover:text-red-600">
            <LogOut className="w-5 h-5 mr-3" />
            <span>Log out</span>
          </button>
        </div>
      </aside>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Mobile Header */}
        <header className="md:hidden bg-white border-b border-gray-200 py-4 px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-blue-600">Contract Analyzer</h1>
            <button className="p-2 rounded-md hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>
        
        {/* Page Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center text-gray-500 hover:text-blue-600 mr-4">
              <ChevronLeft className="w-5 h-5" />
              <span className="ml-1">Back</span>
            </Link>
            <h1 className="text-xl font-semibold">Contract Comparison Tool</h1>
          </div>
          <p className="text-gray-600 mt-1">Compare two legal documents to identify differences, risks, and determine which is more favorable.</p>
        </div>
        
        {/* Main Content Area */}
        <main className="p-6">
          <ContractComparison />
        </main>
        
        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="md:flex md:items-center md:justify-between">
              <div className="text-sm text-gray-500">
                &copy; 2025 Contract Analyzer. All rights reserved.
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</a>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</a>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Contact Support</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContractComparisonPage;