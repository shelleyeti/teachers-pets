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
import LogIn from '../components/landing/LogIn'

import NewsList from './news/NewsList'

class ApplicationViews extends Component {

    state = {
        messages: [],
        events: [],
        friends: [],
        news: [],
        tasks: [],
        users: []
    }
    //calls
    deleteChatMessages = (id) => {
        const newState = {};
        Messages.deleteChatMessages(id)
            .then(Messages.getAll)
            .then(chatMessages => newState.messages = chatMessages)
            .then(() => {
                this.props.history.push("/messages")
                this.setState(newState)
            })
    };

    addChatMessages = (message) => {
        const newState = {};
        return Messages.postChatMessage(message)
            .then((chatMessages) => Messages.getAll())
            .then(chatMessages => newState.messages = chatMessages)
            .then((chatMessages) => {
                this.props.history.push("/messages")
                this.setState(newState)
                //return chatMessagess so it can be used in the form
                return chatMessages;
            });
    };

    updateChatMessages = (editedMessageObject) => {
        const newState = {};
        Messages.editChatMessages(editedMessageObject)
            .then(() => Messages.getAll())
            .then(chatMessages => newState.chatMessages = chatMessages)
            .then(() => {
                this.props.history.push("/messages")
                this.setState(newState)
            });
    };

    deleteEvents = (id) => {
        const newState = {};
        Events.deleteEvents(id)
            .then(Events.getAll)
            .then(events => newState.events = events)
            .then(() => {
                this.props.history.push("/events")
                this.setState(newState)
            })
    };

    addEvents = (event) => {
        const newState = {};
        return Events.postEvent(event)
            .then((events) => Events.getAll())
            .then(events => newState.events = events)
            .then((events) => {
                this.props.history.push("/events")
                this.setState(newState)
                //return events so it can be used in the form
                return events;
            });
    };

    updateEvents = (editedEventObject) => {
        const newState = {};
        Events.editEvents(editedEventObject)
            .then(() => Events.getAll())
            .then(events => newState.events = events)
            .then(() => {
                this.props.history.push("/events")
                this.setState(newState)
            });
    };

    deleteTasks = (id) => {
        const newState = {};
        Tasks.deleteTasks(id)
            .then(Tasks.getAll)
            .then(tasks => newState.tasks = tasks)
            .then(() => {
                this.props.history.push("/tasks")
                this.setState(newState)
            })
    };

    addTasks = (event) => {
        const newState = {};
        return Tasks.postEvent(event)
            .then((tasks) => tasks.getAll())
            .then(tasks => newState.tasks = tasks)
            .then((tasks) => {
                this.props.history.push("/tasks")
                this.setState(newState)
                //return tasks so it can be used in the form
                return tasks;
            });
    };

    updateTasks = (editedEventObject) => {
        const newState = {};
        Tasks.editTasks(editedEventObject)
            .then(() => Tasks.getAll())
            .then(tasks => newState.tasks = tasks)
            .then(() => {
                this.props.history.push("/tasks")
                this.setState(newState)
            });
    };

    deleteUser = (id) => {
        const newState = {};
        Users.deleteUser(id)
            .then(Users.getAllUsers)
            .then(allUsers => newState.users = allUsers)
            .then(() => {
                this.props.history.push("/users")
                this.setState(newState)
            })
    };

    addUser = (event) => {
        const newState = {};
        return Users.postUser(event)
            .then((users) => users.getAllUsers())
            .then(users => newState.users = users)
            .then((users) => {
                this.props.history.push("/users")
                this.setState(newState)
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


    deleteNews = id => {
        const newState = {};
        News.deleteNews(id)
            .then(News.getAll)
            .then(articles => (newState.news = articles))
            .then(() => {
                this.props.history.push("/news");
                this.setState(newState);
            });
    };

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
            .then(Messages.getAllMessage).then(messages => { newState.messages = messages })
            .then(() =>
                this.setState(newState))
    };

    render() {
        return (
            <>
                <Route exact path="/" render={(props) => {
                    return <SignIn
                        addUser={this.addUser} />
                }} />
                <Route path="/login" component={LogIn} />

                <Route exact path="/news" render={(props) => {
                    return <NewsList
                        {...props}
                        news={this.state.news} />
                }} />
            </>
        )
    }
    // render() {
    //     return (
    //         <React.Fragment>

    //             <Route exact path="/" render={(props) => {
    //                 return <LocationList locations={this.state.locations}
    //                     deleteLocation={this.deleteLocation}
    //                 />
    //             }} />
    //             <Route path="/locations/:locationsId(\d+)" render={(props) => {
    //                 let location = this.state.locations.find(location =>
    //                     location.id === parseInt(props.match.params.locationsId)
    //                 )

    //                 if (!location) {
    //                     location = { id: 404, name: "404", address: "Address not found" }
    //                 }

    //                 // If current location details is in the employeeLocations joined table, adds to an array called employeeLocationsId
    //                 let employeeLocationsIds = this.state.employeeLocations.filter(locationJoin => {
    //                     let locationId = 0
    //                     if (locationJoin != null && locationJoin.locationId != null) {
    //                         locationId = locationJoin.locationId
    //                     }
    //                     if (location.id === parseInt(locationId))
    //                         return location;
    //                 })

    //                 //Take employeeLocationsId array and compare to employees table
    //                 let employeeLocations = this.state.employees.filter(employee => {
    //                     let employeeId = 0;
    //                     if(employee != null && employee.id != null){
    //                         employeeId = employee.id;
    //                     }
    //                     for(let i = 0; i<employeeLocationsIds.length; i++){
    //                         if(employeeLocationsIds[i].employeeId === employeeId)
    //                             return employeeLocationsIds[i];
    //                     }
    //                 });

    //                 return <LocationDetail location={location}
    //                     deleteLocation={this.deleteLocation}
    //                     employeeLocations={employeeLocations}
    //                     />
    //             }} />
    //             <Route path="/locations/new" render={(props) => {
    //                 return <LocationForm {...props}
    //                     addLocation={this.addlocation} />
    //             }} />


    //             <Route exact path="/animals" render={(props) => {
    //                 return <AnimalList animals={this.state.animals}
    //                     deleteAnimal={this.deleteAnimal}
    //                 />
    //             }} />
    //             <Route exact path="/animals/:animalId(\d+)" render={(props) => {
    //                 // Find the animal with the id of the route parameter
    //                 let animal = this.state.animals.find(animal =>
    //                     animal.id === parseInt(props.match.params.animalId)
    //                 )
    //                 // If the animal wasn't found, create a default one
    //                 if (!animal) {
    //                     animal = { id: 404, name: "404", breed: "Dog not found" }
    //                 }
    //                 // If current animal details is in the employeeAnimals joined table, adds to an array called employeeAnimalsId
    //                 let employeeAnimalIds = this.state.employeeAnimals.filter(animalJoin => {
    //                     let animalId = 0
    //                     if (animalJoin != null && animalJoin.animalId != null) {
    //                         animalId = animalJoin.animalId
    //                     }
    //                     if (animal.id === parseInt(animalId))
    //                         return animal;
    //                 })

    //                 //Take employeeAnimalsId array and compare to employees table
    //                 let employeeAnimals = this.state.employees.filter(employee => {
    //                     let employeeId = 0;
    //                     if(employee != null && employee.id != null){
    //                         employeeId = employee.id;
    //                     }
    //                     for(let i = 0; i<employeeAnimalIds.length; i++){
    //                         if(employeeAnimalIds[i].employeeId === employeeId)
    //                             return employeeAnimalIds[i];
    //                     }
    //                 });

    //                 return <AnimalDetail {...props}
    //                     kennelModal={KennelModal}
    //                     employees={this.state.employees}
    //                     employeeAnimals={employeeAnimals}
    //                     animal={animal}
    //                     deleteAnimal={this.deleteAnimal}
    //                 />
    //             }} />
    //             <Route path="/animals/:animalId(\d+)/edit" render={props => {
    //                 return <AnimalEditForm {...props}
    //                     employees={this.state.employees}
    //                     updateAnimal={this.updateAnimal} />
    //             }}
    //             />
    //             <Route path="/animals/new" render={(props) => {
    //                 return <AnimalForm {...props}
    //                     addAnimal={this.addAnimal}
    //                     animals={this.state.animals}
    //                     employees={this.state.employees}
    //                     addEmployeeAnimal={this.addEmployeeAnimal}
    //                      />
    //             }} />


    //             <Route exact path="/employees" render={(props) => {
    //                 if (this.isAuthenticated()) {
    //                     return <EmployeeList deleteEmployee={this.deleteEmployee}
    //                         employees={this.state.employees} />
    //                 } else {
    //                     return <Redirect to="/login" />
    //                 }
    //             }} />
    //             <Route path="/employees/:employeeId(\d+)" render={(props) => {
    //                 let employee = this.state.employees.find(employee =>
    //                     employee.id === parseInt(props.match.params.employeeId)
    //                 )

    //                 if (!employee) {
    //                     employee = { id: 404, name: "404", time: "Status found" }
    //                 }

    //                 // If current employee details is in the employeeAnimals joined table, adds to an array called employeeAnimalsId
    //                 let employeeAnimalIds = this.state.employeeAnimals.filter(animalJoin => {
    //                     let employeeId = 0
    //                     if (animalJoin != null && animalJoin.employeeId != null) {
    //                         employeeId = animalJoin.employeeId
    //                     }
    //                     if (employee.id === parseInt(employeeId))
    //                         return employee;
    //                 })

    //                 //Take employeeAnimalsId array and compare to animals table
    //                 let employeeAnimals = this.state.animals.filter(animal => {
    //                     let animalId = 0;
    //                     if(animal != null && animal.id != null){
    //                         animalId = animal.id;
    //                     }
    //                     for(let i = 0; i<employeeAnimalIds.length; i++){
    //                         if(employeeAnimalIds[i].animalId === animalId)
    //                             return employeeAnimalIds[i];
    //                     }
    //                 });

    //                 return <EmployeeDetail employee={employee}
    //                     // animalCaretaker={animalCaretaker}
    //                     employeeAnimals={employeeAnimals}
    //                     deleteEmployee={this.deleteEmployee}
    //                     animals={this.state.animals}
    //                 />
    //             }} />
    //             <Route path="/employees/new" render={(props) => {
    //                 return <EmployeeForm {...props}
    //                     addEmployee={this.addEmployee}
    //                     animals={this.state.animals}
    //                     employees={this.state.employees}
    //                 />
    //             }} />


    //             <Route exact path="/owners" render={(props) => {
    //                 return <OwnerList owners={this.state.owners}
    //                     deleteOwner={this.deleteOwner}
    //                 />
    //             }} />
    //             <Route path="/owners/:ownerId(\d+)" render={(props) => {
    //                 let owner = this.state.owners.find(owner =>
    //                     owner.id === parseInt(props.match.params.ownerId)
    //                 )

    //                 if (!owner) {
    //                     owner = { id: 404, name: "404" }
    //                 }
    //                 // If current owner details is in the ownerAnimals joined table, adds to an array called ownerAnimalsId
    //                 let ownerAnimalIds = this.state.ownerAnimals.filter(ownerJoin => {
    //                     let ownerId = 0
    //                     if (ownerJoin != null && ownerJoin.ownerId != null) {
    //                         ownerId = ownerJoin.ownerId
    //                     }
    //                     if (owner.id === parseInt(ownerId))
    //                         return owner;
    //                 })

    //                 //Take ownerAnimalsId array and compare to animal table
    //                 let ownerAnimals = this.state.animals.filter(animal => {
    //                     let animalId = 0;
    //                     if(animal != null && animal.id != null){
    //                         animalId = animal.id;
    //                     }
    //                     for(let i = 0; i<ownerAnimalIds.length; i++){
    //                         if(ownerAnimalIds[i].animalId === animalId)
    //                             return ownerAnimalIds[i];
    //                     }
    //                 });

    //                 return <OwnerDetail owner={owner}
    //                     ownerAnimals={ownerAnimals}
    //                     deleteOwner={this.deleteOwner}
    //                 />
    //             }} />
    //             <Route path="/owners/new" render={(props) => {
    //                 return <OwnerForm {...props}
    //                     addOwner={this.addOwner}
    //                     animals={this.state.animals}
    //                     owners={this.state.owners}
    //                 />
    //             }} />

    //             <Route path="/login" component={Login} />
    //         </React.Fragment>
    //     )
    // }
}

export default withRouter(ApplicationViews)