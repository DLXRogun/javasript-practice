/*
1. 기본값 매개변수 default function parameter
2. 나머지 매개변수 Rest parameter
3. arguments 객체
*/

// 1번 째 특징
function foo(arg) {
	console.log(arg);
}

function bar(arg = 2) {
	console.log(arg);
}

foo();    // undefuned
bar();    // 1

// 2번 째 특징
function foo(arg, ...rest){
	console.log(rest);
}

foo();     // []
foo(1);    // []   1번째 인자는 arg에 할당
foo(1, 2); // [ 2 ]
foo(1, 2, 3, 4);  // [2, 3, 4]

// 3번 째 특징
function foo(arg, ...rest){
	console.log(arguments);     // arguments 정의 되지 않았지만, funciton 빌트인 객체로 참조할 수 있기 때문에[
}

foo(1, 2, 3, 4);