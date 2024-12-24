import React, { useEffect, useState } from 'react';
import useStudentStore from '../store/useStudentStore';
import AddStudentForm from './AddStudentForm';
import scienceIcon from '/image.png'; // Add the correct path to the icon
import mathIcon from '/image (1).png'; // Add the correct path to the icon

const courseIcons = {
  "CBSE 9 Science": scienceIcon,
  "CBSE 9 Math": mathIcon,
};

const courseOptions = [
  { value: "9", label: "Class 9" },
  { value: "10", label: "Class 10" },
  { value: "11", label: "Class 11" },
];

const StudentList = () => {
  const { students, fetchStudents, deleteStudent, status, error } =
    useStudentStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for filters
  const [selectedCohort, setSelectedCohort] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true); // Opens the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Closes the modal
  };

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  if (status === 'loading') return <p>Loading students...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  // Filtered students based on selected cohort and course
  const filteredStudents = students.filter((student) => {
    const cohortMatch =
      selectedCohort === '' || student.cohort === selectedCohort;
    const courseMatch =
      selectedCourse === '' ||
      student.courses.some((course) => course.includes(selectedCourse));
    return cohortMatch && courseMatch;
  });

  return (
    <div className="p-8 bg-white rounded-lg shadow min-h-screen">
      <div className="flex justify-between">
        <div className="flex space-x-16">
          {/* Cohort Filter */}
          <div className="relative">
            <select
              value={selectedCohort}
              onChange={(e) => setSelectedCohort(e.target.value)}
              className="px-10 py-3 bg-gray-200 text-gray-800 font-medium text-lg rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 cursor-pointer"
            >
              <option value="">All Cohorts</option>
              <option value="AY 2024-2025">AY 2024-2025</option>
              <option value="AY 2023-2024">AY 2023-2024</option>
            </select>
          </div>

          {/* Course Filter */}
          <div className="relative">
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="px-10 py-3 bg-gray-200 text-gray-800 font-medium text-lg rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 cursor-pointer"
            >
              <option>All Courses</option>
              {courseOptions.map((course) => (
                <option key={course.value} value={course.value}>
                  {course.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Add Student Button */}
        <button
          onClick={handleOpenModal}
          className="flex items-center appearance-none px-10 py-3 bg-gray-200 text-gray-800 font-medium text-lg rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add new Student
        </button>
      </div>
      {isModalOpen && <AddStudentForm onClose={handleCloseModal} />}

      {/* Student Table */}
      <table className="mt-7 min-w-full table-auto">
        {/* Table Header */}
        <thead className="bg-white font-extrabold text-base border-b">
          <tr>
            <th className="px-2 py-8 text-left font-medium">Student Name</th>
            <th className="px-2 py-8 text-left font-medium">Cohort</th>
            <th className="px-2 py-8 text-left font-medium">Courses</th>
            <th className="px-2 py-8 text-left font-medium">Date Joined</th>
            <th className="px-2 py-8 text-left font-medium">Last Login</th>
            <th className="px-2 py-8 text-left font-medium">Status</th>
            <th className="px-2 py-8 text-left font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id} className="border-b">
              <td className="p-2">{student.name}</td>
              <td className="p-2">{student.cohort}</td>
              <td className="p-2 flex gap-5">
                {student.courses.map((course) => (
                  <span
                    key={course}
                    className="flex items-center space-x-1 px-2 py-2 bg-gray-100 rounded-lg"
                  >
                    <img
                      src={courseIcons[course]}
                      alt={course}
                      className="w-5 h-5"
                    />
                    <span>{course}</span>
                  </span>
                ))}
              </td>
              <td className="p-2">
                {new Date(student.dateJoined).toLocaleDateString()}
              </td>
              <td className="p-2">
                {new Date(student.lastLogin).toLocaleString()}
              </td>
              <td className="p-2">
                <span
                  className={`inline-block ml-3 w-4 h-4 rounded-full ${
                    student.status ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
              </td>
              <td className="border-b p-2">
                <button
                  onClick={() => deleteStudent(student.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {filteredStudents.length === 0 && (
            <tr>
              <td colSpan="7" className="p-4 text-center">
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
