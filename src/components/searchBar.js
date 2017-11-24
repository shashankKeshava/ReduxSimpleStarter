import React, { Component } from "react";

//State based component
class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ""
		};
	}

handleInputChange=(term)=>{
	this.setState({term});
	this.props.onSearchTermChange(term);
}
	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.value}
					onChange={e=>this.handleInputChange(e.target.value)}
				/>
			</div>
		);
	}
}

export default SearchBar;
