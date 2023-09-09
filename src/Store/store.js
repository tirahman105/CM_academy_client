import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './coursesSlice'; // Import your reducer

const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
  // Define initial state here
  preloadedState: {
    courses: {
      categories: [], // Provide an empty array as the initial state
      // Other state properties...
    },
  },
});

export default store;
