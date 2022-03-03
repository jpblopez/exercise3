import React, { useEffect } from 'react';
import {
  fetchMovies,
  selectLoading,
  selectMovies,
} from './features/movie/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const movies = useSelector(selectMovies);
  const loading = useSelector(selectLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8">
      <div className="mb-4">
        <h1 className="text-2xl mb-4">Movies</h1>
        <p>Watch our free movies today!</p>
      </div>
      <div className="flex flex-row justify-start gap-4">
        {movies.map(item => {
          return (
            <div className="flex flex-col border-black w-[200px]" key={item.id}>
              <div className="image">
                <img
                  src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80"
                  className="object-cover w-full"
                  alt="Cat"
                />
              </div>
              <div className="p-4">{item.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
