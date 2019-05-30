const remoteURL = "http://localhost:5002"

export default {
getNews(id) {
    return fetch(`${remoteURL}/news/${id}`).then(e => e.json())
  },
  getAllNews() {
    return fetch(`${remoteURL}/news`).then(e => e.json())
  },
  deleteNews(id) {
    return fetch(`${remoteURL}/news/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(e => e.json())
  },
  postNews(obj) {
    return fetch(`${remoteURL}/news`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(e => e.json())
  },
  editNews(editedArticle) {
    return fetch(`${remoteURL}/news/${editedArticle.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedArticle)
    }).then(data => data.json());
  }
}