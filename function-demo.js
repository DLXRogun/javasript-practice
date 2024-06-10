/*
1. 함수 선언문
2. 함수 표현식
3. Function 생성자 함수
4. 화살표 함수 표현식
*/

// 1번 째
function foo(){
	console.log('foo')
}

foo() //'foo'

// 2번 째 (익명함수)
const foo = function (){
	console.log('foo2')
}

foo(); //'foo2'

// 3번 째
const foo = new Function("console.log('foo3')")

foo();  // 'foo3'

// 4번 째
const foo = () =>{
	console.log('foo4')
}

foo();   // 'foo4'