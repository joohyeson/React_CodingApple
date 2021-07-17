import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //let posts = '강남 고기 맛집';//동적인 변수 선언

  //useState('남자 코트 추천'); //[a,b]라는 어레이가 생김. a=실제 데이터 내용 b=a의 내용을 변경(예전 ver.)
  let [글제목, 글제목변경] = useState('남자 코트 추천');//ES6 신문법

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <div className="list">
        <h3>{글제목}</h3>
        <p>2월 17일 발행</p>
        <hr />{/* 실선 */}
      </div>

      <div className="list">
        <h3>{글제목}</h3>
        <p>2월 17일 발행</p>
        <hr />{/* 실선 */}
      </div>
    </div>
  );
}

export default App;
