import axios from "axios";

const ROOT_URL;
const API_KEY;

export function fetchMovies(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: "FETCH_MOVIES",
        payload: request
    }
}

export function reserveMovie(movie) {
  return {
    type: "MOVIE_RESERVED",
    payload: movie
  };
}
