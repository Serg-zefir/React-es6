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
		var url1 = 'http://www.omdbapi.com/?' + val;
		fetch(url1)
			.then(response => response.json())
			.then(data => {
				this.setState({ films: data.Search });
				this.setState({ totalRes: data.totalResults }); 
			})
	}
	render() {
		var resdata = this.state;
		return (
			<div className="Root">
				<Search onSubmit={this.getData}/>
				<FilmList films={resdata}/>
			</div>
		);
	}
};

export default App;