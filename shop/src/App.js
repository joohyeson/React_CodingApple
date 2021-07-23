import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useState } from 'react';
import shoesInfo from './data.js'


function App() {

  let [신발정보, 신발정보변경] = useState(shoesInfo);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shoe</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="jumbotron">
        <br />
        <h1>20% Seaon Off</h1>
        <br />
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <br />
        <p>
          <Button variant="dark">Learn More</Button>{' '}
        </p>
        <br />
      </div>

      <div className="container">
        <div className="row">
          {
            신발정보.map(function (object, index) {
              return <ShowShoes number={shoesInfo[index]} />

            })

          }
        </div>
      </div>

    </div>
  );
}

function ShowShoes(props) {
  return (
    <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
      <h4>{props.number.title}</h4>
      <p>{props.number.content}</p>
      <p>{props.number.price}</p>
    </div>
  )
}


export default App;
