import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [],
  activeCategory: 'All',
  categories: [],
  loading: true,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
      state.loading = false;
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setCourses, setActiveCategory, setCategories } = coursesSlice.actions;

export default coursesSlice.reducer;
