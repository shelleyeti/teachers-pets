const remoteURL = "http://localhost:5002"

export default {
getNewsArticle(id) {
    return fetch(`${remoteURL}/news/${id}`).then(e => e.json())
  },
  getAllNews() {
    return fetch(`${remoteURL}/news`).then(e => e.json())
  },
  deleteNewsArticle(id) {
    return fetch(`${remoteURL}/news/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(e => e.json())
  },
  postNewsArticle(obj) {
    return fetch(`${remoteURL}/news`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(e => e.json())
  },
  editNewsArticle(editedArticle) {
    return fetch(`${remoteURL}/news/${editedArticle.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedArticle)
    }).then(data => data.json());
  }
}