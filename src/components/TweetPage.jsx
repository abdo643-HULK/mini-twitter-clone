import React from 'react';
import NewTweet from './NewTweet';
import Tweet from './Tweet';
import { connect } from 'react-redux';
import { handleAddTweet } from '../actions/tweets';
class TweetPage extends React.Component {
	render() {
		const { id, replies } = this.props;
		return (
			<div>
				<Tweet id={id} />
				<NewTweet id={id} />
				{replies.length !== 0 && <h3 className="center">Replies</h3>}
				<ul>
					{replies.map((replyID) => (
						<li key={replyID}>
							<Tweet id={replyID} />
						</li>
					))}
				</ul>
			</div>
		);
	}
}

function mapStateToProps({ authedUser, tweets, users }, props) {
	const { id } = props;
	return {
		id,
		replies: !tweets[id]
			? []
			: tweets[id].replies.sort(
					(a, b) => tweets[b].timestamp - tweets[a].timestamp
			  ),
	};
}

export default connect(mapStateToProps)(TweetPage);
