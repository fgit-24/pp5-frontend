export default class APIService {

    static InsertArticle(body, token) {
        fetch ("http://127.0.0.1:8000/articles/", {
            method: "GET",
            headers: {
              "Content-Type" : "application/json",
              "Authorization" : `Token ${token}`,
            },
            body:JSON.stringify(body)

        }.then(resp => resp.json())
    )}

}