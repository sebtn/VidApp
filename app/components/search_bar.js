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
		<div className="search-bar-container">
			<div className="row">
				<div className="col-sm-1 col-md-1 col-lg-3"></div>
				<div className="form-group col-sm-10 col-md-10 col-lg-6">
					<input type="text" placeholder="Search bar" 
						className="form-control "
						onChange = {this.onInputChange} ref="SearchBar" 
					/>
				</div>
				<div className="col-sm-1 col-md-1 col-lg-3"></div>
			</div>
		</div>
		)
	}
}
/*-------------------------------------------------*/
