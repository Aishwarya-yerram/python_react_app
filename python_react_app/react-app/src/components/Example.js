import React from 'react'

function myElements(names) {
	return names.map(
		name => 
		<div key={name}>
			{`${name}`}
		</div>
	)
}

function Example(props) {
	return (
		<div>
			<h3> {myElements(props.names)}</h3>
		</div>
	)
}

export default Example