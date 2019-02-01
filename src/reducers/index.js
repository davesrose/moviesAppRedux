import movies from './movies_reducer';
import favorites from './fav_reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	movies,
	favorites
});

export default rootReducer;