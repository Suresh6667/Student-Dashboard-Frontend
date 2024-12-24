// frontend/student-dashboard/src/App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AddStudentForm from './components/AddStudentForm';
import StudentList from './components/StudentList';

const App = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Content Area */}
        <div className="p-6 flex-1">
          <StudentList />
        </div>
      </div>
    </div>
  );
};

export default App;
