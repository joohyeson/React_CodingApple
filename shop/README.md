# 1강 쇼핑몰 프로젝트 : 프로젝트 생성 & Bootstrap 설치

## yarn

	npm, npx보다 훨씬 빠른 속도와 안정성을 제공하는 툴
	설치가 되면 자동으로 yarn 명령어가 실행됨
## Bootstrap

	https://getbootstrap.com/

	html/css를 안짜도 미리 디자인 된 양식을 사용할 수 있도록 도와주는 라이브러리

	react는 리액트를 위해서 나온 다른 라이브러리를 제공함


# 3강 코드가 넘나 길어진다면 import / export 사용해보기

## export란?

	어떤 특정한 파일을 다른 파일에서 사용하고 싶을 때 사용하는 문법. 

	export default '변수명'

	변수명 뿐만 아니라 함수, 어레이 등도 내보낼 수 있다. 

## import란?
	
	import '이름' from '/.경로.js'

	데이터를 불러올 수 있다. 

export는 한 파일 당 한번만 사용할 수 있다. 만약 내보낼 변수가 많다면, export {변수1, 변수2}처럼 사용하면 여러개를 내보낼 수 있음. 



# 4강

## src 사이에 변수 참조하는 방법

      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="100%" />

# 5강

## React Router

페이지 나누기(라우팅)= react-router-dom 라이브러리 이용

	npm install react-router-dom

## react-router-dom 초기 셋팅 방법

	index.js에 react-router-dom라이브러리의 BrowserRouter import후, App 컴포넌트를 BrowserRouter로 감싼다. 

	<BrowserRouter>
      <App />
    </BrowserRouter> 

## BrowserRouter Vs HashRouter

	같은 기능이지만 해쉬 라우터는 라우팅을 안전하게 할 수 있게 도와줌. 

	해쉬 라우터는 사이트 주소 뒤에 #이 붙는데 그 이후에 주소를 추가하기 때문에 실수로 존재하지 않는 페이지를 서버에 요청하는 등의 실수를 막아준다. 

## Route를 만들어보자(페이지를 나누자.)

	1) import { Link, Route, Switch } from 'react-router-dom';
	2) <Route exact path="/어쩌구"> <Card/> </Route> 

## exact의 기능

	/경로와 정확히 일치하는 페이지만 보여줌.