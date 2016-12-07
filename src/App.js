import React from 'react';
import Search from './Search';
import Styl from './css/app.css';

class App extends React.Component {
	constructor() {
		super();
		this.props.totalResults;
		this.state = {
			films: []
		}
	}
	componentWillMount() {
		// var c = $('#sbt-form').serialize();
		// 	console.log("c:", c); // .then( ({results: films}) => this.setState({films}) )
		var c = 's=batman&y=2015&type=movie';
		var d = 'http://www.omdbapi.com/?' + c;
		console.log("d:", d);
		fetch(d)
			.then(response => response.json()
			// {
			// 	alert(response.status);
			// 	var k=response.json();
			// 	console.log("res:", JSON.stringify(response), k)
			// } this.setState(data.Search)
			)
			.then(data => {
				this.setState({ films: data.Search });
				this.props.totalResults = data.totalResults;
			})
	}
	// update (e){
	// 	this.setState({txt:e.target.value})
	// }
	// setPoster(purl: string) {
	// 	let stls = {
	// 		'background-image': (purl == 'N/A') ? 'url("images/pstr_na.jpg")' : 'url(' + purl + '), url("images/pstr_na.jpg")'
	// 	};
	// 	return stls;
	// }
	render() {
		let films = this.state.films;
		var Films;
		Films = films.map(item => {
			return (
					<Film key={item.imdbID} film={item} />
			)
		})
		return (
			<div className="Root">
				<Search />
				<p className="founds">Results found: {this.props.totalResults}</p>
				<div className="Stabl row">
					{Films}
				</div>
			</div>
		);
	}
};
class Film extends React.Component {
	render() {
		var title = this.props.film.Title,
			type = this.props.film.Type,
			year = this.props.film.Year,
			poster = this.props.film.Poster;
		const pstr = {
			backgroundSize: 'cover',
			maxWidth: '222px',
			height: ' 320px',
			backgroundImage: (poster === 'N/A') ? 'url("images/pstr_na.jpg")' : 'url(' + poster + '), url("images/pstr_na.jpg")'
		};
		return (
			<div className="film col-sm-6 col-md-3">
				<div className="poster" style={pstr}></div>
				<div>
					<h3 className="title">{title}</h3>
					<span>{type}, {year}</span>
				</div>
			</div>
		)
	}
}
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

export default App;
