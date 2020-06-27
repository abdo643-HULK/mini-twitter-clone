import { getInitialData } from '../utils/api';
import { receiveTweets } from './tweets';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = 'tylermcginnis';

export function handleInitialData() {
	return async (dispatch) => {
		dispatch(showLoading());
		const { users, tweets } = await getInitialData();
		dispatch(receiveUsers(users));
		dispatch(receiveTweets(tweets));
		dispatch(setAuthedUser(AUTHED_ID));
		dispatch(hideLoading());
	};
}

// export function handleInitialData() {
// 	return (dispatch) => {
// 		return getInitialData().then(({ users, tweets }) => {
// 			dispatch(receiveUsers(users));
// 			dispatch(receiveTweets(tweets));
// 			dispatch(setAuthedUser(AUTHED_ID));
// 		});
// 	};
// }
