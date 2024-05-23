import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers you need, such as authorization headers
  },
});

// Define your API endpoints
const apiEndpoints = {
  getMovies: () => api.get('/movies'),
  getMovieById: (movieId: number) => api.get(`/movies/${movieId}`),
  // Add more endpoints as needed
};

export default apiEndpoints;
