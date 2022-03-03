import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  movies: [],
  loading: false,
};

export const fetchMovies = createAsyncThunk('movies/fetched', async () => {
  const response = await axios.get('http://localhost:8000/movies');
  return response.data.movies;
});

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = state.movies.concat(action.payload);
      })
      .addCase(fetchMovies.rejected, state => {
        state.loading = false;
      });
  },
});

export const selectMovies = state => state.movies.movies;
export const selectLoading = state => state.movies.loading;

export default movieSlice.reducer;
