import React, {Component} from 'react'

import {apiKey} from '../../api.js'
import SearchBar from './search_bar' 


export default class VidApp extends Component {
	constructor() {
		super()
	}
	render() {
		return (
		<div> 
			<SearchBar />
		</div>
	 )
	}
}