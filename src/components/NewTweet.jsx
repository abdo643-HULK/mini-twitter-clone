import React from 'react';
import { connect } from 'react-redux';
import { handleAddTweet } from '../actions/tweets';

class NewTweet extends React.Component {
	state = {
		query: '',
	};

	handleChange = (e) => {
		const query = e.target.value;

		this.setState(() => ({
			query,
		}));
	};

	handleSubmit = () => {
		const { query } = this.state;
		const { dispatch, id } = this.props;

		console.log('New Tweet: ', query);
		dispatch(handleAddTweet(query, id));
		this.setState(() => ({
			query: '',
		}));
	};
	render() {
		const { query } = this.state;
		const tweetLeft = 280 - query.length;
		return (
			<div>
				<h3 className="center">Compose new Tweet</h3>
				<form className="new-tweet" onSubmit={this.handleSubmit}>
					<textarea
						value={query}
						placeholder="What is happening"
						className="textarea"
						onChange={this.handleChange}
						maxLength={280}
					></textarea>
					{tweetLeft <= 100 && (
						<div className="tweet-length">{tweetLeft}</div>
					)}
					<button
						className="btn"
						type="submit"
						disabled={query === '' || tweetLeft === 0}
					></button>
				</form>
			</div>
		);
	}
}
