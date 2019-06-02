const remoteURL = "http://localhost:5002"

export default {
  getTask (id) {
    return fetch(`${remoteURL}/tasks/${id}`).then(e => e.json())
  },
  getAllTasks () {
    return fetch(`${remoteURL}/tasks`).then(e => e.json())
  },
  deleteTask (id) {
    return fetch(`${remoteURL}/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(e => e.json())
  },
  postTask (obj) {
    return fetch(`${remoteURL}/tasks`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(e => e.json())
  },
  editTask (editedTask) {
    return fetch(`${remoteURL}/tasks/${editedTask.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedTask)
    }).then(data => data.json());
  }
}