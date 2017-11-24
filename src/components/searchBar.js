import React, { Component } from "react";

//State based component
class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ""
		};
	}

	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.value}
					onChange={e=>this.setState({term:e.target.value})}
				/>
			</div>
		);
	}
}

export default SearchBar;
