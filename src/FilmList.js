import React from 'react';
import Styl from './css/filmList.css';

class FilmList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			films: [],
			totalRes: 0
		}
	}
	componentWillMount() {
		// var c = 's=batman&y=2015&type=movie';
		// var d = 'http://www.omdbapi.com/?' + c;
		// // console.log("d:", d);
		// fetch(d)
		// 	.then(response => response.json())
		// 	.then(data => {
		// 		this.setState({ films: data.Search });
		// 		this.setState({ totalRes: data.totalResults });
		// 		// console.log('data', data.totalResults,'props', this.props.totalResults);
		// 	})
		// if(this.props.resdata){
		// 	this.setState({ films: this.props.resdata.films });
		// 	this.setState({ totalRes: this.props.resdata.totalRes });
		// }
	}
	render() {
		let films = this.props.resdata? this.props.resdata.films : null;
		let tR = (this.props.resdata && this.props.resdata.totalRes>0)? this.props.resdata.totalRes : null;
		var Films= null;
		if(this.props.resdata){
			Films = films.map(item => {
				return (
						<Film key={item.imdbID} film={item} />
				)
			})
		}
		return (
			<div className="Films">
				<p className="founds">Results found: {tR}</p>
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

export default FilmList;
