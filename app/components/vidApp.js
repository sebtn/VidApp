import React, {Component} from 'react'
import YTSearch from 'youtube-api-search'

import {API_KEY} from '../../api.js'
import SearchBar from './search_bar' 
import {VideoList} from './video_list' 
import {VideoDetails} from './video_details' 


/*-------------------------------------------------*/
export default class VidApp extends Component {
	constructor(props) {
		super(props)
		this.state = {
			videos: [],
		}
		YTSearch({key: API_KEY, term: 'react'},  (videos) => {
			this.setState({videos: videos})
		})
	}

/*-------------------------------------------------*/
	render() {
		return (
		<div> 
			<SearchBar />
			<VideoDetails video={this.state.videos[0]} />
			<VideoList videos={this.state.videos} />
		</div>
	 )
	}
}
/*-------------------------------------------------*/
