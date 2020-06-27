export const ADD_TWEET = 'ADD_TWEET';
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

export function receiveTweets(tweets) {
	return {
		type: RECEIVE_TWEETS,
		tweets,
	};
}

// function handleAddTweet(text, replyingTo) {
// 	return (dispatch, getState) => {
// 		const { authedUser } = getState();

// 		return saveTweetToDatabase({
// 			text,
// 			author: authedUser,
// 			replyingTo,
// 		}).then((tweet) => dispatch(addTweet(tweet)));
// 	};
// }
