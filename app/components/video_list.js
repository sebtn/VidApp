import React, {Component} from 'react'
import {VideoListItem} from './video_list_item'

/*Functional or presentational component*/
export const VideoList = (props) => {

	const VideoItems = props.videos.map( (video) => {
		return <VideoListItem key={video.etag} video={video} />
	})

/*-------------------------------------------------*/
	return (
		<div className="list-container">
			<ul className="col-md-4 list-group">
			{VideoItems}
			</ul>
		</div>
	)
}