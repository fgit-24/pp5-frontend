export default class APIService {
  static InsertArticle(body, token) {
    return fetch("https://djrest-f-bfd9b0bcf48e.herokuapp.com/articles/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static RegisterUser(body) {
    return fetch(
      "https://djrest-f-bfd9b0bcf48e.herokuapp.com/dj-rest-auth/registration/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    ).then((resp) => resp.json());
  }

  static UpdateArticle(article_slug, body, token) {
    return fetch(
      `https://djrest-f-bfd9b0bcf48e.herokuapp.com/articles/${article_slug}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(body),
      }
    ).then((resp) => resp.json());
  }

  static DeleteArticle(article_slug, token) {
    return fetch(
      `https://djrest-f-bfd9b0bcf48e.herokuapp.com/articles/${article_slug}/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    );
  }
}
