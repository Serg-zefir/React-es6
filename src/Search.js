import React from 'react';
import styles from './css/index.css';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			form: { s: '', y: '', type: ''}
		};
		this.bindState = this.bindState.bind(this);
    	this.onSubmit = this.onSubmit.bind(this);
	}
    bindState(event) {
         var p = this.state.form;
		 p[event.target.name] = event.target.value;
		 this.setState({form: p});
    }
    onSubmit(event) {
		var data = this.state.form;
		if(data) {
			var request = "";
			for(let key in data){
				if(data[key] !== ''){
					if(request.length>3) request +='&';
					var str = key +'='+ data[key];
					request += str;
				}
			}
			// console.log('req1:', request);
			this.props.onSubmit(request);
		}
		event.preventDefault();
    }
    render() {
        return (
            <form id="sform" className="form-inline srch-bar" onSubmit={this.onSubmit}>
                Search form
                    <div className="form-group">
                        <label className="control-label">Title:</label>
                        <input type="text"
							id="title" name="s"
							placeholder="Search films"
							className="input-small" 
							/*style='width: 180px'*/ required
							pattern="[\w]{2,}"
							title="Should only english letters(min 2)."
							onChange={this.bindState} />&nbsp;
                        <label className="control-label">Year:</label>
                        <input type="number"
							id="year" name="y"
							className="input-small"
							/*style="width: 40px;"*/
							onChange={this.bindState} /> &nbsp;
                    </div>
                    <div className="form-group">
                        <button className="btn-sm btn-info" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                    </div>
                    <div className="radio"> Select the type:&nbsp;
                        <label>
                            <input type="radio"
								className="radiobox-boing"
								name="type" id="radio1"
								value=""
								checked={this.state.form.type === ""}
								onChange={this.bindState}/> All 
                        </label>
                        <label>
                            <input type="radio"
								className="radiobox-focus"
								name="type" id="radio2"
								value="movie"
								onChange={this.bindState}/> movie
                        </label>
                        <label>
                            <input type="radio"
								className="radiobox-ufo"
								name="type" id="radio3"
								value="series"
								onChange={this.bindState}/> series
                        </label>
                        <label>
                            <input type="radio"
								className="radiobox-scatman"
								name="type" id="radio4"
								value="episode"
								onChange={this.bindState}/> episode
                        </label>
                    </div>
            </form>
        )
    }
}

export default Search;