import React, {Component} from 'react'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'

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
		this.videoSearch('surfing')
	}

/*-------------------------------------------------*/
	videoSearch = (term) => {
		YTSearch({key: API_KEY, term: term},  (videos) => {
			this.setState({
				videos: videos, 
				selectedVideo: videos[0]
			})
		})
	}

/*-------------------------------------------------*/
	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500)
		return (
		<div className="main-container ">
			<h1 >Tube viwer built on reactJs</h1>
			<SearchBar onSearchTermChange={ videoSearch } />
			<div className="row"> 
				<div className="video-box col-xs-12 col-md-8">
					<VideoDetails video={this.state.selectedVideo} />
				</div>
				<div className=" col-xs-12 col-md-4 ">
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
