import React, {Component} from 'react';

class Name extends Component {
	constructor(){
		super()
		this.state = {
			name: 'Aishwarya'
		}
	}

	changeElements = () => {
		this.setState({
			name: 'Aish'
		})
		
	}

	render(){
		return (
			<div>
				<h1 className="text-black text-center"> {this.state.name} </h1>
				<button className="btn btn-primary" onClick={this.changeElements}> Change Me </button>
			</div>
		)
	}
}

export default Name;