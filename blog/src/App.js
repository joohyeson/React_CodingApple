import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //let posts = '강남 고기 맛집';//동적인 변수 선언

  //useState('남자 코트 추천'); //[a,b]라는 어레이가 생김. a=실제 데이터 내용 b=a의 내용을 변경(예전 ver.)
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);//ES6 신문법
  let [좋아요, 좋아요변경] = useState(0);
  let [모달클릭, 모달클릭변경] = useState(false);

  function 제목변경() {

    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천'
    글제목변경(newArray)//동일한 자료형을 사용해야 함
  }

  function 모달플래그() {
    if (모달클릭 === true) {
      모달클릭변경(false)
    }
    else {
      모달클릭변경(true)
    }
  }
  return (

    <div className="App">

      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {
        글제목.map(function (a) {
          return (<div className="list">
            <h3>{a} <span onClick={() => { 좋아요변경(좋아요 + 1) }}>👍</span> {좋아요} </h3>
            <p>2월 17일 발행</p>
            <hr />{/* 실선 */}
          </div>)
        })
      }

      <button onClick={모달플래그}>버튼</button>

      {
        모달클릭 === true
          ? <Modal />
          : null
      }

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
