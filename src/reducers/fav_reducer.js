import { ADD_FAV, REMOVE_FAV } from '../actions';

export default function addToFavorite(state = [], action) {
	switch(action.type) {
		case ADD_FAV:
			console.log("Movie added to favorite", action.movie);
			let favoriteMovies = [...state, action.movie];
			return favoriteMovies;
		case REMOVE_FAV:
			console.log("Movie removed from favorite", action.movie);
			favoriteMovies = state.filter(item=> item.id !== action.movie.id);
			return favoriteMovies;
		default:
			return state;
	}
}
