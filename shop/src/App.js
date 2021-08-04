import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useState } from 'react';
import shoesInfo from './data.js'

import { Link, Route, Switch, useHistory } from 'react-router-dom';
import Detail from './Detail';
import QnA from './QnA'

function App() {

  let history = useHistory();
  let [신발정보, 신발정보변경] = useState(shoesInfo);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail/0">Detail</Nav.Link>
            <Nav.Link href="/qna">QnA</Nav.Link>
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
                return <ShowShoes shoes={object} i={index} history={history} />

              })
            }
          </div>
        </div>
      </Route>

      <Route path="/detail/:id">{/*detail/뒤에 어떤 문자가 오더라도 detail컴포넌트로 이동*/}
        <Detail shoesInfo={신발정보} />
      </Route>

      <Route path="/qna">{/*detail/뒤에 어떤 문자가 오더라도 detail컴포넌트로 이동*/}
        <QnA />
      </Route>


    </div>
  );

  function ShowShoes(props) {
    return (
      <div className="col-md-4">
        <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="100%" onClick={() => { history.push("/detail/" + (props.i)) }} />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
        <p>{props.shoes.price}</p>
      </div>
    )
  }

}




export default App;
