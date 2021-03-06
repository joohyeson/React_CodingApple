import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useState } from 'react';
import shoesInfo from './data.js'

import { Link, Route, Switch, useHistory } from 'react-router-dom';
import Detail from './Detail';
import QnA from './QnA';
import axios from 'axios';

function App() {

  let history = useHistory();
  let [신발정보, 신발정보변경] = useState(shoesInfo);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={`${process.env.PUBLIC_URL}/`}>Home</Nav.Link>
            <Nav.Link as={Link} to={`${process.env.PUBLIC_URL}/detail/0`}>Detail</Nav.Link>
            <Nav.Link as={Link} to={`${process.env.PUBLIC_URL}/qna`}>QnA</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Route exact path={`${process.env.PUBLIC_URL}/`}>
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
          <div>
            <Button variant="dark" onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                  신발정보변경([...신발정보, ...result.data]);//더보기를 누르면 배열에 데이터 추가
                })
                .catch(() => {

                })
            }}>더보기</Button>{' '}
          </div>
        </div>
      </Route>

      <Route path={`${process.env.PUBLIC_URL}/`+"detail/:id"}>{/*detail/뒤에 어떤 문자가 오더라도 detail컴포넌트로 이동*/}
        <Detail shoesInfo={신발정보} />
      </Route>

      <Route path={`${process.env.PUBLIC_URL}/`+"qna"}>{/*detail/뒤에 어떤 문자가 오더라도 detail컴포넌트로 이동*/}
        <QnA />
      </Route>


    </div>
  );

  function ShowShoes(props) {
    return (
      <div className="col-md-4">
        <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="100%" onClick={() => { history.push(`${process.env.PUBLIC_URL}`+"/detail/" + (props.i)) }} />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
        <p>{props.shoes.price}</p>
      </div>
    )
  }

}




export default App;
