const remoteURL = "http://localhost:5002"

export default {
  getFriend (id) {
    return fetch(`${remoteURL}/friends/${id}`).then(e => e.json())
  },
  getAllFriends () {
    return fetch(`${remoteURL}/friends`).then(e => e.json())
  },
  deleteFriend (id) {
    return fetch(`${remoteURL}/friends/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(e => e.json())
  },
  addFriend (obj) {
    return fetch(`${remoteURL}/friends`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(e => e.json())
  }
}