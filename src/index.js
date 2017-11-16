import React, { Component } from "react";
import ReactDom from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/searchBar.js";
const API_KEY = "AIzaSyBMHQdixQTMkGzVpxzlNTDzeHPDr9a3hRg";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: []
		};

		YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
			this.setState({videos});
		});
	}
	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

ReactDom.render(<App />, document.querySelector(".container"));
