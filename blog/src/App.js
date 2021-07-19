import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //let posts = '강남 고기 맛집';//동적인 변수 선언

  //useState('남자 코트 추천'); //[a,b]라는 어레이가 생김. a=실제 데이터 내용 b=a의 내용을 변경(예전 ver.)
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);//ES6 신문법
  let [좋아요, 좋아요변경] = useState(0);

  function 제목변경() {

    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천'
    글제목변경(newArray)//동일한 자료형을 사용해야 함
  }
  return (

    <div className="App">

      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={제목변경}>버튼</button>
      <div className="list">
        <h3>{글제목[0]} <span onClick={() => { 좋아요변경(좋아요 + 1) }}>👍</span> {좋아요} </h3>
        <p>2월 17일 발행</p>
        <hr />{/* 실선 */}
      </div>

      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 17일 발행</p>
        <hr />{/* 실선 */}
      </div>

      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 17일 발행</p>
        <hr />{/* 실선 */}
      </div>
	  <Modal></Modal>
    </div>
  );
}

function Modal(){
	return (
		<div className="modal">
		<h2>제목</h2>
		<p>날짜</p>
		<p>상세내용</p>
		</div>
	)
}

export default App;
