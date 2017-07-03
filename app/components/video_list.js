import React, {Component} from 'react'
import {VideoListItem} from './video_list_item'

/*Functional or presentational component*/
export const VideoList = (props) => {

	let VideoItems = props.videos.map( (video) => {
		return <VideoListItem 
			onVideoSelect ={props.onVideoSelect}
			key={video.etag} 
			video={video} 
		/>
	})

/*-------------------------------------------------*/
	return (
			<ul className="list-group">
				{VideoItems}
			</ul>
	)
}