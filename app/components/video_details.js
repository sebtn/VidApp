import React, {Component} from 'react'

/*Functional component*/
export const VideoDetails = ({video}) => {
	if (!video) {
		return <div>Loading...</div>	
	}

	const videoId = video.id.videoId
	const url = `https://www.youtube.com/embed/${videoId}`

	return (
		<div>
			<div className="video-container" >	
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	)
}