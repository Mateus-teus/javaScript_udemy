function tipo(n){
    if(typeof(n) === 'number'){
        console.log(`é um número`)
    }else if(typeof(n) ==='string'){
        console.log(`Você digitou um texto`)
    }else if(typeof(n) == true || typeof(n)==false){
        console.log(`Você digitou um boolean`)
    }
}

tipo(30)
tipo(`Olá mundo`)
tipo(true)