const foo = (arg) => {
	return arg();
}

foo(() => {
	return 1;
});