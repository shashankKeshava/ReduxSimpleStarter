import React, { Component } from "react";
import ReactDom from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/searchBar.js";
import VideoList from "./components/videoList.js";
import VideoDetail from "./components/videoDetail.js";

const API_KEY = "AIzaSyBMHQdixQTMkGzVpxzlNTDzeHPDr9a3hRg";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};

		YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
			this.setState({ videos, selectedVideo: videos[0] });
		});
	}
	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo =>
						this.setState({ selectedVideo })
					}
					videos={this.state.videos}
				/>
			</div>
		);
	}
}

ReactDom.render(<App />, document.querySelector(".container"));
