let idade = 19;
let cnh = true;

if(idade >=18 && cnh==false){
    console.log(`Você não tem sua cnh disponivel`)
}else if(idade >=18 && cnh==true){
    console.log(`Você está habilitado a dirigir`)
}else if(idade <18 && cnh==false){
    console.log(`Você não tem idade e nem cnh para dirigir`)
}
