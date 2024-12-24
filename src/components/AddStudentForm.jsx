import React, { useState } from 'react';
import useStudentStore from '../store/useStudentStore';

const AddStudentForm = ({ onClose }) => {
  const addStudent = useStudentStore((state) => state.addStudent);
  const [form, setForm] = useState({
    name: '',
    cohort: 'AY 2024-2025', // Default value
    courses: [], // Default value
    dateJoined: '',
    lastLogin: '',
    status: true,
  });

  const handleCourseChange = (e) => {
    const selectedCourse = e.target.value;
    setForm((prev) => ({
      ...prev,
      courses: prev.courses.includes(selectedCourse)
        ? prev.courses.filter((course) => course !== selectedCourse)
        : [...prev.courses, selectedCourse],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare student data
    const newStudent = {
      ...form,
      dateJoined: form.dateJoined || new Date().toISOString(),
      lastLogin: form.lastLogin || new Date().toISOString(),
      status: form.status,
    };

    addStudent(newStudent);

    // Reset the form after submission
    setForm({
      name: '',
      cohort: 'AY 2024-2025',
      courses: [],
      dateJoined: '',
      lastLogin: '',
      status: true,
    });

    // Close the modal after submission
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add New Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Student Name:</label>
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Cohort:</label>
            <select
              value={form.cohort}
              onChange={(e) => setForm({ ...form, cohort: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-indigo-300 cursor-pointer"
            >
              <option value="AY 2024-2025">AY 2024-2025</option>
              <option value="AY 2023-2024">AY 2023-2024</option>
            </select>
          </div>
          <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Courses:</label>
          <div className="flex gap-4">
              <label className='cursor-pointer'>
                <input
                  type="checkbox"
                  value="CBSE 9 Science"
                  checked={form.courses.includes('CBSE 9 Science')}
                  onChange={handleCourseChange}
                />
                <span className="ml-2">CBSE 9 Science</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  value="CBSE 9 Math"
                  checked={form.courses.includes('CBSE 9 Math')}
                  onChange={handleCourseChange}
                />
                <span className="ml-2">CBSE 9 Math</span>
              </label>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Status:</label>
            <select
              value={form.status ? 'active' : 'inactive'}
              onChange={(e) =>
                setForm({ ...form, status: e.target.value === 'active' })
              }
              className="border p-2 rounded"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            > 
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentForm;
