import React, {Component} from 'react'

/*Functional or presentational component*/
export const VideoListItem = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url

	return (
		<div className="list-container" onClick={() => onVideoSelect(video)}  >
			<li className="list-group-item">
				<div className="video-list media">
					<div className="media-left">
						<div className="media-heading">{video.snippet.title}</div>
					</div>
					<div className="media-body">
						<img className="media-object" src={imageUrl}/>
					</div>					
				</div>
			</li>
		</div>
	)
}

