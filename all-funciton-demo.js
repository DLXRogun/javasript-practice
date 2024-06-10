/*
1. IIFE ( 즉시 실행 함수 )
2. 재귀함수
3. 중첩함수
4. 콜백함수
*/

// 1번 째
(function foo(){
    console.log('foo');
})()             // 'foo'

// 2번 째
function foo (arg) {
	if(arg === 3) return;
	console.log(arg);
	foo(arg + 1);
}

foo(1)
//
1
2

// 3번 째
function foo(arg) {
	function bar() {
		console.log(arg);
	}
	bar();
}

foo(1);    // 1

// 4번 째
function foo(arg){
	arg();
}

foo(() => {
	console.log(1);
});

// 1