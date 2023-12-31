import React, {useState, useEffect} from 'react'
import APIService from '../APIService';
import {useCookies} from 'react-cookie';

function Form(props) {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [token] = useCookies(['mytoken'])

	useEffect(() => {
		setTitle(props.article.title)
		setDescription(props.article.description)
	}, [props.article])
	
	const updateArticle = () => {
		APIService.UpdateArticle(props.article.id, {title, description}, token['mytoken'])
		.then(resp => props.updatedInformation(resp))
	}

	const insertArticle = () => {
		APIService.InsertArticle({title, description}, token['mytoken'])
		.then(resp => props.insertedInformation(resp))
	}

	return (
		<div>
			<h2> Form </h2>
			{props.article ? (
				<div className='mb-3'>
					<label htmlFor='title' className='form-label'>Title</label>
					<input type='text' className='form-control' id='title'
						   placeholder='enter title' value={title}
						   onChange = {e => setTitle(e.target.value)} />
					<label htmlFor='description' className='form-label'>Title</label>
					<textarea className='form-control' id='description' 
						      placeholder='enter description' value={description}
						      onChange = {e => setDescription(e.target.value)} />
					<br/>
					{
						props.article.id ? <button onClick = {updateArticle} className='btn btn-success'>Update Article</button> 
						: <button onClick = {insertArticle} className='btn btn-success'>Insert Article</button>
					}
					
				</div>
			) : null}
		</div>
	)
}

export default Form;