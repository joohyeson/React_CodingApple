
# 1-2강

![image](https://user-images.githubusercontent.com/68503845/125445872-95f24468-cfa8-418d-b6f1-994a5490233d.png)


## Node.js 설치 이유

npm, npx의 툴을 사용하기 위해서.

npm, npx는 라이브러리들을 쉽게 설치하도록 도와주는 툴이다.  

ex) npx create-react-app 등

## npx create-react-app blog의 의미

blog라는 이름의 react app과 폴더를 자동으로 생성해줌

## npm start의 의미

브라우저에 내가 만든 react app을 띄울 수 있음

## src/App.js파일

리액트의 메인 페이지에 들어갈 HTML을 짜는 곳. 

실제 메인 페이지는 public/index.html이다. 

## 폴더 설명

### node_modules 폴더

지금까지 설치한 라이브러리들을 모아놓은 폴더

### public 폴더

static 파일들의 보관함(압축 x)

### src 폴더

소스코드 보관함

### package.json

설치한 라이브러리 목록

자동으로 버전 등이 기록됨

# 3강

## JSX문법

### 1) 태그에 class를 주고 싶으면?

<div className="클래스명">

App.js를 스타일링 해주려면 App.css에서 설정해주면 됨

### 2) 리액트에서 데이터 바인딩 쉽게 하는 방법

{변수명}, {함수()} 만으로 데이터를 가져올 수 있음

이미지를 가져올 때에도 <img src= {logo}>로 편리하게 사용가능하다

-> 귀찮으니까 className써서 css사용하는게 더 편함

### 3) JSX에서 style속성을 바로 집어넣는 방법

오브젝트 형식으로 넣어야함.

style={스타일}

style={{color: 'blue', fontSize : 30px}}

font-size사용 불가능. camelCase를 사용하여야 한다. 
 
## 리액트가 단순 HTML코딩보다 편리한 이유

데이터바인딩이 쉽다! (같은 이유로 Vue, angular 등을 사용함)

# 4강

## 리액트에서의 데이터 저장 방법 

### 1) 변수에 삽입

### 2) state에 삽입

    step 1) 상단에 import {useState} from 'react';
        // 리액트에 있는 내장 함수(useState) 하나를 쓰겠다는 의미

    step 2) useState(데이터)
        useState('남자 코트 추천'); //[a,b]라는 어레이가 생김.a=실제 데이터 내용 b=a의 내용을 변경(예전 ver.)
        let [a,b]=useState('남자 코트 추천');//ES6 신문법

## state의 장점

웹이 App처럼 동작하게 만들고 싶어서 사용함. 
useState를 사용하면 state가 변경되면 HTML이 자동으로 재렌더링이 된다. ( 그냥 변수는 새로고침이 필요함)
잘 바뀌지 않는 내용들은 그냥 const, let으로 변수 만들어서 사용하면 됨






