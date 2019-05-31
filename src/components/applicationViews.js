import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import { withRouter } from 'react-router'
import Messages from '../modules/messagesManager'
import Events from '../modules/eventsManager'
import Friends from '../modules/friendsManager'
import News from '../modules/newsManager'
import Tasks from '../modules/tasksManager'
import Users from '../modules/usersManager'
import SignIn from '../components/landing/SignIn'
import LogIn from '../components/auth/LogIn'
import Dashboard from '../components/dashboard/Dashboard'
import TaskApp from './tasks/TasksApp'
import MessageContainer from './messages/messagesContainer'
import NewsList from './news/NewsList'
import NewsForm from './news/NewsForm'
// import TaskModal from './tasks/taskModal'
// import FriendsList from './friends/friendsList'
import EventForm from './events/eventForm'
import EventList from './events/eventsList'
import NewsEditForm from './news/NewsEditForm'

class ApplicationViews extends Component {
    state = {
        messages: [],
        events: [],
        friends: [],
        news: [],
        tasks: [],
        users: []
    };
    //calls
    deleteMessage = id => {
        const newState = {};
        Messages.deleteMessage(id)
            .then(Messages.getAllMessages)
            .then(chatMessages => (newState.messages = chatMessages))
            .then(() => {
                this.props.history.push("/messages");
                this.setState(newState);
            });
    };

    addMessage = message => {
        const newState = {};
        return Messages.postMessage(message)
            .then(() => Messages.getAllMessages())
            .then(chatMessages => (newState.messages = chatMessages))
            .then(chatMessages => {
                this.props.history.push("/messages");
                this.setState(newState);
                //return chatMessagess so it can be used in the form
                return chatMessages;
            });
    };

    updateMessage = editedMessageObject => {
        const newState = {};
        Messages.editMessage(editedMessageObject)
            .then(() => Messages.getAllMessages())
            .then(chatMessages => (newState.chatMessages = chatMessages))
            .then(() => {
                this.props.history.push("/messages");
                this.setState(newState);
            });
    };

  deleteEvents = id => {
    const newState = {};
    Events.deleteEvent(id)
      .then(Events.getAllEvents)
      .then(events => (newState.events = events))
      .then(() => {
        this.props.history.push("/events");
        this.setState(newState);
      });
  };

    addEvents = event => {
        const newState = {};
        return Events.postEvent(event)
            .then(() => Events.getAllEvents())
            .then(events => (newState.events = events))
            .then(events => {
                this.props.history.push("/events");
                this.setState(newState);
                //return events so it can be used in the form
                return events;
            });
    };

  updateEvents = editedEventObject => {
    const newState = {};
    Events.editEvent(editedEventObject)
      .then(() => Events.getAllEvents())
      .then(events => (newState.events = events))
      .then(() => {
        this.props.history.push("/events");
        this.setState(newState);
      });
  };

  deleteTasks = id => {
    const newState = {};
    Tasks.deleteTask(id)
      .then(Tasks.getAllTasks)
      .then(tasks => (newState.tasks = tasks))
      .then(() => {
        this.props.history.push("/tasks");
        this.setState(newState);
      });
  };

    addTasks = task => {
        const newState = {};
        return Tasks.postTask(task)
            .then(() => Tasks.getAllTasks())
            .then(tasks => newState.tasks = tasks)
            .then((tasks) => {
                this.props.history.push("/tasks")
                this.setState(newState)
                //return tasks so it can be used in the form
                return tasks;
            });
    };

  updateTasks = editedEventObject => {
    const newState = {};
    Tasks.editTask(editedEventObject)
      .then(() => Tasks.getAllTasks())
      .then(tasks => (newState.tasks = tasks))
      .then(() => {
        this.props.history.push("/tasks");
        this.setState(newState);
      });
  };

  deleteUser = id => {
    const newState = {};
    Users.deleteUser(id)
      .then(Users.getAllUsers)
      .then(allUsers => (newState.users = allUsers))
      .then(() => {
        this.props.history.push("/users");
        this.setState(newState);
      });
  };

    addUser = event => {
        const newState = {};
        return Users.postUser(event)
            .then(() => Users.getAllUsers())
            .then(users => (newState.users = users))
            .then(users => {
                this.props.history.push("/users");
                this.setState(newState);
                //return tasks so it can be used in the form
                return users;
            });
    };

    updateUser = (editedUser) => {
        const newState = {};
        Users.editUser(editedUser)
            .then(() => Users.getAllUsers())
            .then(Users => newState.Users = Users)
            .then(() => {
                this.props.history.push("/users")
                this.setState(newState)
            });
    };

  updateUser = editedUser => {
    const newState = {};
    Users.editUser(editedUser)
      .then(() => Users.getAllUsers())
      .then(Users => (newState.Users = Users))
      .then(() => {
        this.props.history.push("/users");
        this.setState(newState);
      });
  };

  deleteNews = id => {
    const newState = {};
    News.deleteNews(id)
      .then(News.getAllNews)
      .then(articles => (newState.news = articles))
      .then(() => {
        this.props.history.push("/news");
        this.setState(newState);
      });
  };

  addNews = article => {
    const newState = {};
    return News.postNews(article)
      .then(() => News.getAllNews())
      .then(articles => (newState.news = articles))
      .then(article => {
        this.props.history.push("/news");
        this.setState(newState);
        return article;
      });
  };

  editNews = editedArticle => {
    const newState = {};
    News.editNews(editedArticle)
      .then(() => News.getAllNews())
      .then(articles => (newState.news = articles))
      .then(() => {
        this.props.history.push("/news");
        this.setState(newState);
      });
  };

    deleteFriends = id => {
        const newState = {};
        Friends.deleteFriend(id)
            .then(Friends.getAllFriends)
            .then(friends => (newState.friends = friends))
            .then(() => {
                this.props.history.push("/friends");
                this.setState(newState);
            });
    };

    addFriends = friend => {
        const newState = {};
        return Friends.postFriend(friend)
            .then(() => Friends.getAllFriends())
            .then(friends => (newState.friends = friends))
            .then(friends => {
                this.props.history.push("/friends");
                this.setState(newState);
                //return friends so it can be used in the form
                return friends;
            });
    };

    editFriends = editedFriend => {
        const newState = {};
        Friends.editFriend(editedFriend)
            .then(() => Friends.getAllFriends())
            .then(friends => (newState.friends = friends))
            .then(() => {
                this.props.history.push("/friends");
                this.setState(newState);
            });
    };

    componentDidMount() {
        const newState = {};
        Events.getAllEvents()
            .then(events => { newState.events = events })
            .then(Friends.getAllFriends).then(friends => { newState.friends = friends })
            .then(News.getAllNews).then(news => { newState.news = news })
            .then(Tasks.getAllTasks).then(tasks => { newState.tasks = tasks })
            .then(Users.getAllUsers).then(users => { newState.users = users })
            .then(Messages.getAllMessages).then(messages => { newState.messages = messages })
            .then(() =>
                this.setState(newState))
    };
    
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null
       
    render() {
        return (
            <>
                <Route exact path="/" render={(props) => {
                    return <SignIn
                        addUser={this.addUser} />
                }} />
                <Route path="/login" render={(props) => {
                return <LogIn setUser={this.props.setUser} {...props}  /> }}
                />
                <Route exact path="/dashboard" render={props => {
                    if (this.isAuthenticated()) {
                        return <Dashboard {...props}
                        activeUser={this.props.activeUser}
                        tasks={this.state.tasks}
                        events={this.state.events}
                        news={this.state.news}
                        friends={this.state.friends}
                        messages={this.state.messages} />
                    } else {
                        return <Redirect to="/" />
                    }
                 }} />
                
                <Route exact path="/tasks" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <TaskApp
                        initItems={this.state.tasks}
                        addTask={this.addTasks}
                        deleteTask={this.deleteTasks}
                        markDone={this.updateTasks}
                    />
                    } else {
                        return <Redirect to="/" />
                    }

                }} />
                <Route
                    exact
                    path="/messages"
                    render={props => {
                        if (this.isAuthenticated()) {
                            return (
                                <MessageContainer
                                    messages={this.state.messages}
                                    {...props}
                                    deleteMessage={this.deleteMessage}
                                    addMessage={this.addMessage}
                                />
                            );
                        } else {
                            return <Redirect to="/" />
                        }
                    }}
                />
                         <Route
          exact
          path="/events"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <EventList
                  {...props}
                  events={this.state.events}
                  deleteEvents={this.deleteEvents}
                />
              );
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          path="/events/new"
          render={props => {
            if (this.isAuthenticated()) {
              //route for add events form
              return <EventForm {...props} addEvent={this.addEvents} />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route exact path="/news" render={props => {
                    if (this.isAuthenticated()) {
                        return <NewsList {...props} news={this.state.news} deleteNews={this.deleteNews} />;
                    } else {
                        return <Redirect to="/" />
                    }
                }}
                />
                <Route path="/news/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        //route for add news form
                        return <NewsForm {...props} addNews={this.addNews} />
                    } else {
                        return <Redirect to="/" />
                    }
                }} />
                <Route path="/news/:articleId(\d+)/edit" render={props => {
                    if (this.isAuthenticated()) {
                        return <NewsEditForm {...props} editNews={this.editNews} />
                    } else {
                        return <Redirect to="/" />
                    }
                }}
                />
            </>
        );
    }
}
export default withRouter(ApplicationViews);