import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, ButtonGroup
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class NewsItem extends Component {

  state = {
    saveDisabled: false
  }

  handleClickDelete = (event) => {
    this.setState({
      saveDisabled: true
    })
    this.props.deleteNews(this.props.news.id);
  }

  handleClickDetails = (event) => {
    this.setState({
      saveDisabled: true
    })
  }

  render() {
    return (
      // <div className="cardtask-card d-inline-flex col-md-2">
      //   <div className="card-body">
      //     <div className="card-title">
      //       <h5>{this.props.article.title}</h5>
      //     </div>
      //     <p className="d-flex justify-content-center">
      //       {this.props.article.synopsis}
      //     </p>
      //     <div className="d-flex justify-content-center">
      //       <a className="nav-link" href={`${this.props.article.url}`} target="_blank" rel="noopener noreferrer" >Link to Article</a>
      //     </div>
      //     <div>
      //       <button
      //         type="button"
      //         className="btn btn-outline-primary btn-sm"
      //         onClick={() => {
      //           this.props.history.push(`/news/${this.props.article.id}/edit`);
      //         }}>
      //         Edit Article
      //                   </button>
      //       <button
      //         className="btn btn-outline-primarynews-delete-btn btn-sm"
      //         disabled={this.state.saveDisabled}
      //         onClick={this.handleClickDelete}>
      //         Delete Article
      //                   </button>
      //     </div>
      //   </div>
      // </div >
      <Card className="NewsItem m-2">
        {/* <CardImg top width="100%" src="" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>{this.props.article.title}</CardTitle>
          <CardText>{this.props.article.synopsis}</CardText>
          <a className="nav-link" href={`${this.props.article.url}`} target="_blank" rel="noopener noreferrer" >Link to Article</a>
          <ButtonGroup className="btn-group ml-1" size="sm">
            <Button className="btn btn-outline-success">Edit</Button>
            <Button className="btn btn-outline-danger">Delete</Button>
          </ButtonGroup>
        </CardBody>
      </Card>

    )
  }
}

export default NewsItem