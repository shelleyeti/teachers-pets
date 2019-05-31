import React, { Component } from "react";
import { withRouter } from "react-router";
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Container
} from 'reactstrap';
import NewsItem from './NewsItem';
import BlankCard from './BlankCard';
import FirstNewsItem from './FirstNewsItem'
import './news.css'


class NewsList extends Component {

  findFirst = () => {
    let first = this.props.news.shift();

    return first;
  }

  render() {
    return (
      <Container className="News">
        <Container className="AddNewsButton">
          <Button type="button" className="btn btn-outline-success"
            onClick={() => {
              this.props.history.push("/news/new");
            }}
          >
            Add Article
            </Button>
        </Container>
        <h1>Your News</h1>
        <CardColumns className="">
          {
            this.props.news.map(item => {
              if (item.userId === this.props.activeUser.firstName) {
                return (
                  <>
                    {/* <FirstNewsItem key={this.findFirst.id} article={this.findFirst} /> */}
                    <NewsItem key={item.id} article={item} {...this.props}
                      deleteNews={this.props.deleteNews} />
                  </>
                )
              } else if (!item) {
                return <BlankCard />
              }
            })
          }
        </CardColumns>
      </Container>
    )
  }
}

export default withRouter(NewsList);
