import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useState } from 'react';
import shoesInfo from './data.js'

import { Link, Route, Switch } from 'react-router-dom';

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



      <Route exact path="/">
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
                return <ShowShoes shoes={object} i={index} />

              })
            }
          </div>
        </div>
      </Route>
      <Route exact path="/detail">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button>
            </div>
          </div>
        </div>
      </Route>



    </div>
  );
}

function ShowShoes(props) {
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  )
}


export default App;
