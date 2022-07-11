# REACT_CODINGAPPLE 실습

실제 페이지: https://joohyeson.github.io/React_CodingApple/

![image](https://user-images.githubusercontent.com/68503845/178377124-0987cff7-48f5-4120-b9a6-defa1df13a4e.png)

![image](https://user-images.githubusercontent.com/68503845/178377116-b86fdf89-c4b3-448d-ad6c-27fbbea8257f.png)



## 1강 쇼핑몰 프로젝트 : 프로젝트 생성 & Bootstrap 설치

* yarn

		npm, npx보다 훨씬 빠른 속도와 안정성을 제공하는 툴
	
		설치가 되면 자동으로 yarn 명령어가 실행됨
	
* Bootstrap

		https://getbootstrap.com/

		html/css를 안짜도 미리 디자인 된 양식을 사용할 수 있도록 도와주는 라이브러리

		react는 리액트를 위해서 나온 다른 라이브러리를 제공함



## 3강 코드가 넘나 길어진다면 import / export 사용해보기

* export

		어떤 특정한 파일을 다른 파일에서 사용하고 싶을 때 사용하는 문법. 

		export default '변수명'

		변수명 뿐만 아니라 함수, 어레이 등도 내보낼 수 있다. 

* import
	
		import '이름' from '/.경로.js'

		데이터를 불러올 수 있다. 
		

✔️ export는 한 파일 당 한번만 사용할 수 있다. 만약 내보낼 변수가 많다면, export {변수1, 변수2}처럼 사용하면 여러개를 내보낼 수 있음. 



## 4강

* src 사이에 변수 참조하는 방법
```js
      	<img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="100%" />
```

## 5강

* React Router

		페이지 나누기(라우팅)= react-router-dom 라이브러리 이용

		✔️ npm install react-router-dom


* react-router-dom 초기 셋팅 방법

		index.js에 react-router-dom라이브러리의 BrowserRouter import후, App 컴포넌트를 BrowserRouter로 감싼다. 
		
	```javascript
	<BrowserRouter>
	    <App />
	</BrowserRouter>
	```

* BrowserRouter Vs HashRouter

		같은 기능이지만 해쉬 라우터는 라우팅을 안전하게 할 수 있게 도와줌. 

		해쉬 라우터는 사이트 주소 뒤에 #이 붙는데 그 이후에 주소를 추가하기 때문에 실수로 존재하지 않는 페이지를 서버에 요청하는 등의 실수를 막아준다. 

* Route를 만들어보자(페이지를 나누자.)

		1) import { Link, Route, Switch } from 'react-router-dom';
		2) <Route exact path="/어쩌구"> <Card/> </Route> 

* exact의 기능

		경로와 정확히 일치하는 페이지만 보여줌.


## 6강 React Router 2 : Link, Switch, history 기능

* Link 태그
	```js
	<Link to="/">Home</Link>
	<Link to="/detail">Detail</Link>
	```
		to라는 속성을 이용해서 경로를 적어주면 페이지 이동이 가능함.

	* history 태그

			ex) 뒤로가기 기능
	
		```js
		import { useHistory } from 'react-router-dom';
		let history = useHistory();
		<button onClick={()=>{ history.goBack() }} className="btn btn-danger">뒤로가기</button> 
		```
	
			ex) 커스텀 페이지로 이동
		```js
		<button onClick={()=>{ history.push('/') }} className="btn btn-danger">뒤로가기</button> 
		push()함수 사용하기
		```
	
* Switch 태그

        여러개의 Route가 존재할 때 exact를 쓰지 않고도 하나의 Route만 보여주도록 하는 태그.


## 7강 React Router 3 : URL 파라미터로 상세페이지 100개 만들기

* Detail.js에서 사용할 props들을 App.js에서 사용하는 이유

		상위->하위로 데이터를 가져오는 건 쉽지만 하위->상위로 보내는 것은 어렵기 때문에 상위 컴포넌트에서 데이터를 관리하는 것이 좋음

* /detail/0, /detail/1 등 번호에 따라 상품을 보여주기

		1) :id로 라우팅하기
	```js
	<Route path="/detail/:id">{/*detail/뒤에 어떤 문자가 오더라도 detail컴포넌트로 이동*/}
	  <Detail shoesInfo={신발정보} />		
	</Route>
	```

		2) Detail.js에 파라미터 번호(:id)를 불러오기
	```js
	import { useHistory, useParams } from 'react-router-dom';
	let { id } = useParams();//:id자리에 사용자가 입력한 값
	```

## 8강 styled-components를 이용한 class없는 CSS스타일링

* styled-components

	컴포넌트가 많아지면 CSS작성에 대한 고민이 많아진다. ex) 실수로 class를 중복으로 만들기도 함. 
	이러한 문제를 해결하기위해서 class선언 없이 컴포넌트에 직접 CSS를 장착 시켜주는 라이브러리


	* 기본 사용 방법
		
		1) npm install styled-components 설치
		2) import styled from 'styled-components'; 
		3)
		let 박스 = styled.div`
    		padding : 20px;
		`;//역따옴표 주의
		4) <박스>ㅇㄹ</박스>

	* 추가적인 유용한 사용 방법

		let 제목 = styled.h4`
		  font-size : 25px;
		  color : ${ props => props.색상 };
		`;

		<div>
      		<HTML 많은 곳/>
      		<박스>
        		<제목 색상="blue">안녕하세요1</제목>
        		<제목 색상={'red'}>안녕하세요2</제목>
     		</박스>
   		 </div>

		props를 사용해서 원하는 문자를 전송할 수 있다. 

	* 리액트에서 props를 전송하는 방법

		<제목 색상="blue"></제목>//일반 텍스트 전달
		<제목 색상={'red'}></제목> //변수나 자료형

	* 다른 사람과 협업을 하는 경우에는 사용하지 않는 게 좋다. (리액트 숙련도를 요구하기 때문)

## 9강 아니면 CSS대신 SASS를 쓰자 (SASS 문법 10분 총정리)

	* SASS
		CSS를 프로그래밍 언어스럽게 작성하기 위한 Preprocessor
		브라우저는 SASS문법을 모르기 때문에 다시 CSS로 컴파일해야한다. 이 일을 하는 라이브러리:
		npm install node-sass

	* 적용 방법
		Detail.css가 아닌 Detail.scss로 사용
	
	* 변수 선언 및 사용

		$메인컬러 : #ff0000;

		.red {
			color : $메인컬러;
		}

	* 다른 파일 import

		@import './reset.scss'

	* nesting

		div.container{
			h4{
				color: blue;
			}

			p{
				color: green;
			}
		}//sass 문법

		div.container h4{
			color: blue;
		}//css 문법

	* @extend

		.my-alert {
			background : #eeeeee;
			padding : 15px;
			border-radius : 5px;
			max-width : 500px;
			width : 100%;
			margin : auto;
		}

		.my-alert-red {
			@extend .my-alert;
			background: #ffe591;
		}

	* @mixin/@include

		@mixin 함수() {
			background : #eeeeee;
			padding : 15px;
			border-radius : 5px;
			max-width : 500px;
			width : 100%;
			margin : auto;
		}
		.my-alert {
			@include 함수()
		}

		.my-alert p {
			margin-bottom : 0;
		}


## 10강 Lifecycle Hook (옛날사람) useEffect (요즘사람)

	* Link의 warning 해결 방법

		<Nav.Link as={Link} to="/">Home</Nav.Link>

	* Lifecycle Hook

		hook을 사용해서 컴포넌트의 생애주기 중간중간에 명령을 내릴 수 있다.
		ex) 생성 되기 전에/ 업데이트 되기 전에/삭제되기 전에 등등..

		* class 컴포넌트 Hook

			componentDidMout()//컴포넌트 생성직후 실행할 코드
			componentWillUnmount()//컴포넌트가 사라지기 직전 실행할 코드

		* function 컴포넌트 Hook

			* 컴포넌트 생성 직후 실행할 코드
				useEffect(()=>{
					
					기능작성
					
					});//컴포넌트가 mount되었을 때, update 될 때 특정 코드를 실행시킴.	
				
				let [알림, 알림변경] = useState(false);
				useEffect(() => {
					//2초 후에 alert창이 보이지 않게
					setTimeout(() => {
						알림변경(true);
					}, 2000);
				});

				<div className="my-alert" hidden={알림}>
					<p>재고가 얼마 남지 않았습니다.</p>
				</div>
			
			* 컴포넌트 삭제 직전 실행할 코드

				useEffect(()=>{
				
					return function 어쩌구(){ 실행할 코드 } 
				});

			* 여러개를 사용하고 싶을 때

				useEffect(()=>{
					//1빠로 실행할 코드
				});
				useEffect(()=>{
					//2빠로 실행할 코드 
				});//순서대로 실행됨

## 11강 useEffect 숙제 풀이 & 나머지 기능

	* 특정 state가 변경될 때만 실행하는 방법

		업데이트가 될 때마다 실행되기 때문에 의도하지 않은 경우에도 실행될 수 있다. 
		조건안에 아무것도 없으면 처음에 생성될 때만 실행된다. []

		let [알림, 알림변경] = useState(true);
		useEffect(()=>{
					
			기능작성
					
		}, [알림]);//alert

	* setTimeout 사용시 주의점

		useEffect(()=>{
			let 타이머 = setTimeout(()=>{ alert변경(false) }, 2000);

			return ()=>{ clearTimeout(타이머) }
		}, []);

		컴포넌트가 사라질 때 clearTimeout을 해줘야함. 

## 12강 리액트에서의 Ajax 요청방법 & Ajax는 무엇인가 

	* GET 요청: 특정 페이지/자료 읽기
	* POST 요청: 서버로 중요한 정보 전달
	* Ajax
		서버에 새로고침없이 요청을 할 수 있게 도와준다.
		GET/POST는 요청을 할 때마다 새로고침 됨.

		1) jQuery에서 $.ajax()
		2) 자바스크립트 fetch()
		3) axios에서 axios.get()
			리액트에서 가장 많이 사용함. json파일을 그대로 가져오는게 아니라 오브젝트화해서 가져와줌.

			    <button className="btn btn-primary" onClick={()=>{

					axios.get('https://codingapple1.github.io/shop/data2.json')
					.then((첫번째 인자 : 가져온 자료)=>{ 요청성공시실행할코드 })
					.catch(()=>{ 요청실패시실행할코드 })

				}}>더보기</button>


## 13강 리액트에서의 Ajax 요청방법 2 & 숙제풀이

	* POST
		서버에 데이터를 보낼 때 사용

		axios.post('https://codingapple1.github.io/shop/data2.json', { id : 'test', pw : 1234})
		.then((result)=>{  })
		.catch(()=>{ })





