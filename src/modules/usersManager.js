const remoteURL = "http://localhost:5002"

export default {
  getUser (userName) {
    return fetch(`${remoteURL}/users?userName=${userName}`).then(e => e.json())
      .then(r => r[0])
  },
  getAllUsers () {
    return fetch(`${remoteURL}/users`).then(e => e.json())
  },
  deleteUser (id) {
    return fetch(`${remoteURL}/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(e => e.json())
  },
  postUser (obj) {
    return fetch(`${remoteURL}/users`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(e => e.json())
  },
  editUser (editedUser) {
    return fetch(`${remoteURL}/users/${editedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedUser)
    }).then(data => data.json());
  }
}