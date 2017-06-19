import React, {Component} from 'react'
import YTSearch from 'youtube-api-search'

import {API_KEY} from '../../api.js'
import SearchBar from './search_bar' 


/*-------------------------------------------------*/
export default class VidApp extends Component {
	constructor(props) {
		super(props)
		this.state = {
			videos: [],
		}
		YTSearch({key: API_KEY, term: 'surfboards'},  (videos) => {
			this.setState({videos: videos})
		})
	}

/*-------------------------------------------------*/
	render() {
		return (
		<div> 
			<SearchBar />
		</div>
	 )
	}
}
/*-------------------------------------------------*/
