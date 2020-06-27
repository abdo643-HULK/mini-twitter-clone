import authedUser from './authedUser';
import users from './users';
import tweets from './tweets';
import { loadingBarReducer } from 'react-redux-loading';
import { combineReducers } from 'redux';

export default combineReducers({
	authedUser,
	users,
	tweets,
	loadingBar: loadingBarReducer,
});
