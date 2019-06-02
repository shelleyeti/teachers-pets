import React, { Component } from 'react';
import {
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class NewsForm extends Component {

  // Set initial state
  state = {
    activeUser: "",
    title: "",
    synopsis: "",
    url: "",
    imgurl: "",
    dateTime: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {

    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewNews = evt => {

    let today = new Date();
    let formatTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds());
    let formattedTime = formatTime.toLocaleString("en-US", { hour12: true });

    const article = {
      userId: this.props.activeUser.firstName,
      title: this.state.title,
      synopsis: this.state.synopsis,
      url: this.state.url,
      imgurl: this.state.imgurl,
      dateTime: formattedTime
    }

    this.props.addNews(article);
  }

  render () {
    return (
      <React.Fragment>
        <h1>Add Article</h1>
        <Form>
          <InputGroup className="m-2">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Article Title</InputGroupText>
            </InputGroupAddon>
            <Input type="text"
              required
              id="title"
              onChange={ this.handleFieldChange }
            />
          </InputGroup>

          <InputGroup className="m-2">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Synopsis</InputGroupText>
            </InputGroupAddon>
            <Input type="text"
              required
              id="synopsis"
              onChange={ this.handleFieldChange } />
          </InputGroup>

          <InputGroup className="m-2">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>url</InputGroupText>
            </InputGroupAddon>
            <Input type="text"
              required
              id="url"
              onChange={ this.handleFieldChange } />
          </InputGroup>

          <InputGroup className="m-2">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>img url</InputGroupText>
            </InputGroupAddon>
            <Input type="text"
              required
              id="imgurl"
              onChange={ this.handleFieldChange } />
          </InputGroup>

          {/* //* maybe a checkbox that asks if youd like to favorite it and some sort of designation in your own news list? */ }
          <Button className="btn btn-outline-primary" size="sm" onClick={ this.constructNewNews }>Submit</Button>
        </Form>
      </React.Fragment >
    );
  }
}