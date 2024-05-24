import axios from "axios";

const BASE_URL = "http://localhost:8000/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Add any other headers you need, such as authorization headers
  },
});

// Define your API endpoints
const apiEndpoints = {
  getMovies: () => api.get("/movies"),
  getMovieById: (movieId: number) => api.get(`/movies/${movieId}`),
  getMovieByGenre: (genre: string) => api.get(`/movies/genre/${genre}`),
  getMovieByTimeSlot: (
    theaterName: string,
    timeStart: string,
    timeEnd: string
  ) =>
    api.get(`/movies/timeslot`, {
      params: {
        theater_name: theaterName,
        time_start: timeStart,
        time_end: timeEnd,
      },
    }),
  // Add more endpoints as needed
};

export default apiEndpoints;
