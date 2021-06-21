
import { combineReducers } from 'redux';

const Movies = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_MOVIES': return action.payload;
        default: return state;
    }
}

const Movie = (state = null, action) => {
    switch (action.type) {
        case 'FETCH_MOVIE': return action.payload;
        default: return state;
    }
}

const Search = (state = "", action) => {
    switch (action.type) {
        case 'SEARCH_DIFF': return action.payload;
        default: return state;
    }
}


export default combineReducers({ movies: Movies, movie: Movie, search: Search })