import React, { Component } from 'react'
import { Form, InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap'
import NewsManager from '../../modules/newsManager'



export default class NewsEditFrom extends Component {

  state = {
    userId: "",
    title: "",
    synopsis: "",
    url: "",
    imgurl: ""
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
          userId: this.props.activeUser.firstName,
          title: article.title,
          synopsis: article.synopsis,
          url: article.url,
          imgurl: article.imgurl
        });
      });
  }


  updateArticle = evt => {

    const article = {
      id: this.props.match.params.articleId,
      userId: this.state.userId,
      title: this.state.title,
      synopsis: this.state.synopsis,
      url: this.state.url,
      imgurl: this.state.imgurl
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

          <InputGroup className="m-2">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>image url</InputGroupText>
            </InputGroupAddon>
            <Input type="text"
              required
              id="imgurl"
              onChange={ this.handleFieldChange } />
          </InputGroup>

          <Button className="btn btn-outline-primary" size="sm" onClick={ this.updateArticle }>Change It</Button>
        </Form>
      </React.Fragment >
    );
  }
}
