let a = 10;

function multiplicar(x,y){
	let a = x * y;

	if(a > 10){
		let a = 0
		a++
		console.log(a); // este é da condição if
	}

	console.log(a); // este é da função
}

console.log(a); // este é o escopo global (10)

multiplicar(1,7); // aqui chama a função e passa os parametros