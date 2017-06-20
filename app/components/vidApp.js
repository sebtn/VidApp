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
			selectedVideo: null,
		}
		YTSearch({key: API_KEY, term: 'jazz'},  (videos) => {
			this.setState({
				videos: videos, 
				selectedVideo: videos[0]
			})
		})
	}

/*-------------------------------------------------*/


/*-------------------------------------------------*/
	render() {
		return (
		<div className="main-container ">
			<h1 >Tube viwer built on reactJs</h1>
			<SearchBar />
			<div className="row"> 
				<div className="col-sm-8 col-md-8">
					<VideoDetails video={this.state.selectedVideo} />
				</div>
				<div className="col-sm-4 col-md-4  ">
					<VideoList 
						onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
						videos={this.state.videos} 
					/>				
				</div>
			</div>				
		</div>
	 )
	}
}
/*-------------------------------------------------*/
