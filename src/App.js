import React from 'react';
import Search from './Search';
import FilmList from './FilmList';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			films: [],
			totalRes: 0
		};
		this.getData = this.getData.bind(this);
	}
	getData(val) {
		// var lohj = Search.state.req;
		console.log('req2', val);
		// var c = 's=batman&y=2015&type=movie';
		var url1 = 'http://www.omdbapi.com/?' + val;
		// console.log("d:", url1);
		fetch(url1)
			.then(response => response.json())
			.then(data => {
				this.setState({ films: data.Search });
				this.setState({ totalRes: data.totalResults });
				// console.log('data', data.totalResults,'props', this.props.totalResults);
			})
	}
	render() {
		var resdata = this.state;
		// console.log('LOGGER:', films);
		return (
			<div className="Root">
				<Search onSubmit={this.getData}/>
				<FilmList films={resdata}/>
			</div>
		);
	}
};

export default App;

// {films.map(film => <span>{film.Title}</span>)}
// const Widget =(props) =>
// 	<input type="text" name="txt" onChange={props.update}/>
// App.propTypes = {
// 	txt: React.PropTypes.string,
// 	cat: React.PropTypes.number.isRequired
// }

// App.defaultProps = {
// 	txt: "moto undead"
// }
