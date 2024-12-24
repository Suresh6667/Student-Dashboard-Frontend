// frontend/student-dashboard/src/store/useStudentStore.js

import { create } from 'zustand';
import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const useStudentStore = create((set) => ({
  students: [],
  status: 'idle',
  error: null,

  // Fetch all students
  fetchStudents: async () => {
    set({ status: 'loading' });
    try {
      const response = await axios.get(API_URL);
      set({ students: response.data, status: 'succeeded' });
    } catch (error) {
      set({ error: error.message, status: 'failed' });
    }
  },

  // Add a new student
  addStudent: async (student) => {
    try {
      const response = await axios.post(API_URL, student);
      set((state) => ({ students: [...state.students, response.data] }));
    } catch (error) {
      console.error('Error adding student:', error);
    }
  },

  // Update a student
  updateStudent: async (id, updatedStudent) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedStudent);
      set((state) => ({
        students: state.students.map((student) =>
          student.id === id ? response.data : student
        ),
      }));
    } catch (error) {
      console.error('Error updating student:', error);
    }
  },

  // Delete a student
  deleteStudent: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      set((state) => ({
        students: state.students.filter((student) => student.id !== id),
      }));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  },
}));

export default useStudentStore;
