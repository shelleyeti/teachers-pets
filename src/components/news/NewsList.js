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
          <Button type="button" className="btn btn-outline-success"
            onClick={() => {
              this.props.history.push("/news/new")
            }
            }>
            Add Article
            </Button>
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

