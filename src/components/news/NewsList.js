import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody
} from 'reactstrap';
import NewsItem from './NewsItem';


class NewsList extends Component {

  render() {
    return (
      <section className="News">
        <div className="AddNewsButton">
          <button type="button" className="btn btn-outline-success"
            onClick={() => {
              this.props.history.push("/news/new")
            }
            }>
            Add Article
            </button>
        </div>
        <h1>Your News</h1>
        <CardColumns>
          {
            this.props.news.map(item => {
              return <NewsItem key={item.id} article={item} {...this.props}
                deleteNews={this.props.deleteNews} />
            })
          }
        </CardColumns>

      </section>
    )
  }
}

export default withRouter(NewsList)

