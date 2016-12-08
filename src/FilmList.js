import React from 'react';
import Styl from './css/filmList.css';

class FilmList extends React.Component {
	constructor(props) {
		super(props);
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
				<p className="founds">Results found: {this.props.resdata && this.props.resdata.totalRes}</p>
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
