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
	let term = this.refs.SearchBar.value
	this.setState({term}) 
	this.props.onSearchTermChange(term)
}

/*-------------------------------------------------*/
	render() {
		return (
		<div className="search-bar-container">
			<div className="row">
				<div className="col-sm-1 col-md-2 col-lg-4"></div>
				<div className="form-group col-sm-10 col-md-8 col-lg-4">
					<input type="text" placeholder="Search a vid" 
						className="form-control "
						onChange = {this.onInputChange} ref="SearchBar" 
					/>
				</div>
				<div className="col-sm-1 col-md-2 col-lg-4"></div>
			</div>
		</div>
		)
	}
}
/*-------------------------------------------------*/
