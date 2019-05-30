const remoteURL = "http://localhost:5002"

export default {
  getMessage(id) {
    return fetch(`${remoteURL}/messages/${id}`).then(e => e.json())
  },
  getAllMessages() {
    return fetch(`${remoteURL}/messages`).then(e => e.json())
  },
  deleteMessage(id) {
    return fetch(`${remoteURL}/messages/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(e => e.json())
  },
  postMessage(obj) {
    return fetch(`${remoteURL}/messages`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(e => e.json())
  },
  editMessage(editedMessage) {
    return fetch(`${remoteURL}/messages/${editedMessage.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedMessage)
    }).then(data => data.json());
  }
}