import React from 'react'

function Hello(props){

	function ButtonClick() {
		alert('Button is clicked');
	}

	return (
		<div>
			<h1>My name is :{props.name} </h1>
			<button className="btn btn-success" onClick={ButtonClick}> Button </button>
		</div>
	)
}

export default Hello;