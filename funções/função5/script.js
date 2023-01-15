let y = 5;
	const multiplicar = function(n){
	let y =  n * 2;
	console.log(y) //escopo função
	if(y == 10){
	let y = 55;
	console.log(y) //escopo if dentro da função

}
}
	multiplicar(10); 