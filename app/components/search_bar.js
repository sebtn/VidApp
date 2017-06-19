import React, {Component} from 'react'
 

export default class SearchBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			term: '',
		}
	}

/*-------------------------------------------------*/
onInputChange = (event) => {
	event.preventDefault()
	let textCapture = this.refs.SearchBar.value
	this.setState({term: textCapture}) 
}

/*-------------------------------------------------*/
	render() {
		return (
		<div>
			<input type="text" placeholder="Search bar" 
			onChange = {this.onInputChange} ref="SearchBar" />
		</div>
		)
	}
}
/*-------------------------------------------------*/
