import React, {Component} from 'react';


class MyClass extends Component {

	render(){

		return(
			<div>
				<h1 className="bg-primary text-white text-center"> My email is : {this.props.email} </h1>
				<button className="btn btn-primary" onClick={this.props.myclick}> Class Button</button>
			</div>
		)
	}
}

export default MyClass;