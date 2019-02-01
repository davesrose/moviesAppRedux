import React, { Component } from 'react';

import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

import { API_KEY } from '../secret';
import { movies } from '../actions';
import { connect } from 'react-redux';

class Search extends Component {

	constructor(props) {
		super(props);

		this.state = {
			query: ''
		}
	}

	search() {
		//console.log("Search button clicked", this.state.query);
		let search = this.state.query;
		let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&page=1`;
		fetch(url, {
			method: 'GET'
		}).then(response=> response.json())
		.then(jsonObj=> {this.props.movies(jsonObj.results)});
	}

	render() {
		return (
			<Form inline className="col-md-6 col-md-offset-3">
				<FormGroup>
					<ControlLabel>Search</ControlLabel>
					{ ' ' }
					<FormControl
						type="text"
						placeholder="Enter text here"
						onChange={(event)=>this.setState({query: event.target.value})}
					/>
					{ ' ' }
					<Button bsStyle="primary" onClick={()=>this.search()}>Submit</Button>
				</FormGroup>
			</Form>
		)
	}
}

export default connect(null, { movies })(Search);