import React, { Component } from 'react'
import { Form, InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap'
import NewsManager from '../../modules/newsManager'



export default class NewsEditFrom extends Component {

  state = {
    title: "",
    synopsis: "",
    url: "",
    dateTime: ""
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }


  componentDidMount () {
    NewsManager.getNews(this.props.match.params.articleId)
      .then(article => {
        console.log(article);
        this.setState({
          title: article.title,
          synopsis: article.synopsis,
          url: article.url,
          dateTime: article.dateTime
        });
      });
  }

  updateArticle = evt => {

    let today = new Date();
    let formatTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds());
    let formattedTime = formatTime.toLocaleString("en-US", { hour12: true });

    const article = {
      id: this.props.match.params.articleId,
      title: this.state.title,
      synopsis: this.state.synopsis,
      url: this.state.url,
      dateTime: formattedTime
    }

    this.props.editNews(article);
  }




  render () {
    return (
      <React.Fragment>
        <h1>Edit Article</h1>
        <Form>
          <InputGroup className="m-2">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Article Title</InputGroupText>
            </InputGroupAddon>
            <Input type="text"
              required
              id="title"
              value={ this.state.title }
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
              value={ this.state.synopsis }
              onChange={ this.handleFieldChange } />
          </InputGroup>

          <InputGroup className="m-2">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>url</InputGroupText>
            </InputGroupAddon>
            <Input type="text"
              required
              id="url"
              value={ this.state.url }
              onChange={ this.handleFieldChange } />
          </InputGroup>

          <Button className="btn btn-outline-primary" size="sm" onClick={ this.updateArticle }>Change It</Button>
        </Form>
      </React.Fragment >
    );
  }
}
