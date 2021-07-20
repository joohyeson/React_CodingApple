import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //let posts = '강남 고기 맛집';//동적인 변수 선언

  //useState('남자 코트 추천'); //[a,b]라는 어레이가 생김. a=실제 데이터 내용 b=a의 내용을 변경(예전 ver.)
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);//ES6 신문법
  let [좋아요, 좋아요변경] = useState(0);
  let [모달클릭, 모달클릭변경] = useState(false);
  let [제목번호, 제목번호변경] = useState(0);

  let [a, SetA] = useState('');

  function 제목변경() {

    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천'
    글제목변경(newArray)//동일한 자료형을 사용해야 함
  }

  function 제목추가() {
    let newArray = [...글제목];
    newArray.unshift(a);//앞에 빈 array 한 칸이 추가됨
    글제목변경(newArray)
    SetA('')
  }

  return (

    <div className="App">

      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {
        글제목.map(function (a, i) {//i는 반복문이 돌 때마다 0,1,2순서대로 증가하는 변수
          return (<div className="list">
            <h3 onClick={() => { 제목번호변경(i) }}>{a} <span onClick={() => { 좋아요변경(좋아요 + 1) }}>👍</span> {좋아요} </h3>
            <p>2월 17일 발행</p>
            <hr />{/* 실선 */}
          </div>)
        })
      }

      <div className="publish">
        <input value={a} onChange={(e) => { SetA(e.target.value) }} />
        <button onClick={제목추가}>저장</button>
      </div>

      <button onClick={() => { 모달클릭변경(!모달클릭) }}>창 열기</button>

      {
        모달클릭 === true
          ? <Modal 글제목={글제목} 제목번호={제목번호} />
          : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>제목 {props.글제목[props.제목번호]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
