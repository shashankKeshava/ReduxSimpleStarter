import React from "react";

import VideoListItem from "./videoListItem.js";
const videoList = props => {
	props.videos.map(video => {
		return <VideoListItem video={video} />;
	});
	return <ul className="list-group">{videoList}</ul>;
};

export default videoList;
