import React, { Component } from "react";
import ReactDom from "react-dom";
import YTSearch from "youtube-api-search";
import _ from "lodash";

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

		this._videoSearch("surfboards");
	}

	_videoSearch = term => {
		YTSearch({ key: API_KEY, term: term }, videos => {
			this.setState({ videos, selectedVideo: videos[0] });
		});
	};
	render() {
		const videoSearch=_.debounce((term)=>{this._videoSearch(term)},300);
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
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
