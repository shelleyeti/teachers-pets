import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import { withRouter } from "react-router";
import Messages from "../modules/messagesManager";
import Events from "../modules/eventsManager";
import Friends from "../modules/friendsManager";
import News from "../modules/newsManager";
import Tasks from "../modules/tasksManager";
import Users from "../modules/usersManager";
import SignIn from "../components/landing/SignIn";
import LogIn from "../components/landing/LogIn";
import MessagesContainer from "../components/messages/messagesContainer";
import NewsList from "./news/NewsList";

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
      .then(messages => (newState.messages = messages))
      .then(() => {
        this.props.history.push("/messages");
        this.setState(newState);
      });
  };

  addChatMessages = message => {
    const newState = {};
    return Messages.postMessage(message)
      .then(chatMessages => Messages.getAll())
      .then(chatMessages => (newState.messages = chatMessages))
      .then(chatMessages => {
        this.props.history.push("/messages");
        this.setState(newState);
        //return chatMessagess so it can be used in the form
        return chatMessages;
      });
  };

  updateChatMessages = editedMessageObject => {
    const newState = {};
    Messages.editMessage(editedMessageObject)
      .then(() => Messages.getAll())
      .then(chatMessages => (newState.chatMessages = chatMessages))
      .then(() => {
        this.props.history.push("/messages");
        this.setState(newState);
      });
  };

  deleteEvents = id => {
    const newState = {};
    Events.deleteEvents(id)
      .then(Events.getAll)
      .then(events => (newState.events = events))
      .then(() => {
        this.props.history.push("/events");
        this.setState(newState);
      });
  };

  addEvents = event => {
    const newState = {};
    return Events.postEvent(event)
      .then(events => Events.getAll())
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
    Events.editEvents(editedEventObject)
      .then(() => Events.getAll())
      .then(events => (newState.events = events))
      .then(() => {
        this.props.history.push("/events");
        this.setState(newState);
      });
  };

  deleteTasks = id => {
    const newState = {};
    Tasks.deleteTasks(id)
      .then(Tasks.getAll)
      .then(tasks => (newState.tasks = tasks))
      .then(() => {
        this.props.history.push("/tasks");
        this.setState(newState);
      });
  };

  addTasks = event => {
    const newState = {};
    return Tasks.postEvent(event)
      .then(tasks => tasks.getAll())
      .then(tasks => (newState.tasks = tasks))
      .then(tasks => {
        this.props.history.push("/tasks");
        this.setState(newState);
        //return tasks so it can be used in the form
        return tasks;
      });
  };

  updateTasks = editedEventObject => {
    const newState = {};
    Tasks.editTasks(editedEventObject)
      .then(() => Tasks.getAll())
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
      .then(users => users.getAllUsers())
      .then(users => (newState.users = users))
      .then(users => {
        this.props.history.push("/users");
        this.setState(newState);
        //return tasks so it can be used in the form
        return users;
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
      });}

    deleteNews = id => {
      const newState = {};
      News.deleteNews(id)
        .then(News.getAllNews)
        .then(articles => (newState.news = articles))
        .then(() => {
          this.props.history.push("/news");
          this.setState(newState);
        });}

    addNews = article => {
      const newState = {};
      return News.postNews(article)
        .then(articles => News.getAllNews())
        .then(articles => (newState.news = articles))
        .then(article => {
          this.props.history.push("/news");
          this.setState(newState);
          //return animals so it can be used in the form
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
        });}

  componentDidMount() {
    const newState = {};
    Events.getAllEvents()
      .then(events => {
        newState.events = events;
      })
      .then(Friends.getAllFriends)
      .then(friends => {
        newState.friends = friends;
      })
      .then(News.getAllNews)
      .then(news => {
        newState.news = news;
      })
      .then(Tasks.getAllTasks)
      .then(tasks => {
        newState.tasks = tasks;
      })
      .then(Users.getAllUsers)
      .then(users => {
        newState.users = users;
      })
      .then(Messages.getAllMessage)
      .then(messages => {
        newState.messages = messages;
      })
      .then(() => this.setState(newState));
  }

  render() {
    return (
      <>
        <Route
          exact
          path="/"
          render={props => {
            return <SignIn addUser={this.addUser} />;
          }}
        />
        <Route path="/login" component={LogIn} />

        <Route
          exact
          path="/news"
          render={props => {
            return <NewsList {...props} news={this.state.news} />;
          }}
        />
        <Route
          exact
          path="/messages"
          render={props => {
            return (
              <MessagesContainer
                messages={this.state.messages}
                {...props}
                deleteMessage={this.deleteMessage}
              />
            );
          }}
        />
      </>
    );
  }
}

export default withRouter(ApplicationViews);
