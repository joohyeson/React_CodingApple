
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

# 5강

## 리액트 state 값 변경 방법

    1) let [좋아요, 좋아요변경] = useState(0);
        //state 생성
    2) <span onClick={() => { 좋아요변경(좋아요 + 1) }}>👍</span> {좋아요} 
        // onClick시 함수 호출(좋아요변경 변수에 바꾸고 싶은 값 삽입시 변경됨)
        // state값을 그냥 변경할 수는 없다. 


# 6강

## onClick={함수()}

    바로 실행된다는 의미이기 때문에 클릭 시 실행되게 하려면 소괄호를 빼줘야함

## deep copy vs shallow copy

    1) deep copy
        var newArray = [...글제목];
        newArray[0]='여자 코트 추천'

    2) shallow copy(단순히 값 공유)
        var newArray = 글제목;
        newArray[0]='여자 코트 추천'


## state 어레이 변경 방법

    1) 하드코딩
        function 제목변경() {
            글제목변경(['여자 코트 추천', '강남 우동맛집', '파이썬 독학'])
        }
    
    2) 개발자스럽게?
        var newArray = [...글제목];
        newArray[0]='여자 코트 추천'
        글제목변경(newArray)
		
# 7강 
## React Component : 많은 div들을 한 단어로 줄이고 싶은 충동이 들 때

## Component

	긴 HTML을 깔끔하게 넣을 수 있는 문법을 제공하는 방법으로, HTML덩어리를 의미함
	
	=> div 지옥 탈출!

### Component 사용 방법

	1) function을 이용해서 함수 생성
	2) 함수 안에 원하는 HTML 내용 삽입
	3) 원하는 곳에서 <functionName></functionName>을 선언하면 사용가능
	
### Component의 특징
	
	1) 반복사용 되는 곳/자주 변경 되는 곳 등은 Component로 만드는 것이 좋음
	2) 함수 문법처럼 긴 코드 축양이나 재사용, 혹은 기능별로 나눌 때 사용한다고 이해하면 됨

### Component의 단점

	1) App(){} 안에 있는 state를 사용하고 싶을 때에 바로 사용이 불가능하고, props라는 문법을 사용해서 전달해야만 사용할 수 있음
	

# 8강 클릭하면 동작하는 UI (모달창) 만드는 법

## 기존의 자바 스크립트 문법

    style="display : none" 사용

## JSX에서의 사용법

    if문을 사용하면 되지만, JSX 내부에서는 if문 대신 삼항 연산자를 사용한다. 

## 삼항 연산자
    조건식 ? 조건식 참일 때 실행할 코드 : 조건식 거짓일 때 실행할 코드 

     { 
         1 < 3 
         ? <Modal />
         : null
      }




           





