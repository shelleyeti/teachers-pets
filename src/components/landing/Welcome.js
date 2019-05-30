import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Welcome.css'
const Welcome = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid className="welcome-container">
          <h1 className="display-3">Welcome to Nutshell</h1>
          <p className="lead">The internet's premiere crappy-Facebook. Keep track of tasks, events, friends and more... all in one sleek, incovenient place.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Welcome;