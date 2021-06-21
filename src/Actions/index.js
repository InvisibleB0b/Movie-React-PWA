import movieDB from "../Apis/MovieDB";

export const fetchMovies = (query) => async dispatch => {
    const response = await movieDB.get(`/search/movie?query=${query}`);

    dispatch({ type: 'FETCH_MOVIES', payload: response.data.results })
}

export const searchQuery = (query) => dispatch => {

    dispatch({ type: 'SEARCH_DIFF', payload: query });
}

export const fetchMovie = (id) => async dispatch => {
    const response = await movieDB.get(`/movie/${id}`);

    dispatch({ type: 'FETCH_MOVIE', payload: response.data })
}