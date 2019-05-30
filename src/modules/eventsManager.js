const remoteURL = "http://localhost:5002"

export default {
  getEvent(id) {
    return fetch(`${remoteURL}/events/${id}`).then(e => e.json())
  },
  getAllEvents() {
    return fetch(`${remoteURL}/events`).then(e => e.json())
  },
  deleteEvent(id) {
    return fetch(`${remoteURL}/events/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(e => e.json())
  },
  postEvent(obj) {
    return fetch(`${remoteURL}/events`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(e => e.json())
  },
  editEvent(editedEvent) {
    return fetch(`${remoteURL}/events/${editedEvent.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedEvent)
    }).then(data => data.json());
  }
}