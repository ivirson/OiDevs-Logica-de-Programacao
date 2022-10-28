// let nome = "Guilherme"
// try {
//     console.log(nome);
// } catch(erro_capturado){
//     console.log(erro_capturado.message);
// }

function soma(num1, num2) {
    return num1+num2
}

try{
    console.log(soma(2,p));
} catch(error) {
    console.log(error.name);
    console.log(error.message);
} finally {
    console.log("Finally");
}