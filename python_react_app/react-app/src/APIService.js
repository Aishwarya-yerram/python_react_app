export default class APIService {
	static UpdateArticle(article_id, body){
		return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
			'method': 'PUT',
			headers: {
       			'Content-Type': 'application/json',
        		'Authorization': 'Token 9ea43624a5a7a47f068cd29d3ae000271efac67d' 
      		},
      		body: JSON.stringify(body) 
		}).then(resp => resp.json())
	}

	static DeleteArticle(article_id){
		return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
			'method': 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Token 9ea43624a5a7a47f068cd29d3ae000271efac67d' 
			}
		})
	}

	static InsertArticle(body){
		return fetch(`http://127.0.0.1:8000/api/articles/`, {
			'method': 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Token 9ea43624a5a7a47f068cd29d3ae000271efac67d'
			},
			body: JSON.stringify(body)
		}).then(resp => resp.json())
	}
}