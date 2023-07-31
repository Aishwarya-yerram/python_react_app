import React from 'react'

function Hello(props){

	function ButtonClick() {
		alert('Button is clicked');
	}

	return (
		<div>
			<h1>My name is :{props.name} </h1>
			<button onClick={ButtonClick}> Button </button>
		</div>
	)
}

export default Hello;