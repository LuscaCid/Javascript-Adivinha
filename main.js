let randomNumber = Math.round(Math.random()*11);
let attempts = 1;
const button = document.querySelector('button') ;
const screen2 = document.querySelector('.screen2');
const buttonTryAgain = document.querySelector('#tryagain');
const screen1 = document.querySelector('.screen1');
button.addEventListener('click', handdleClick);
buttonTryAgain.addEventListener('click', resetPage);

function handdleClick(event){
    event.preventDefault();/*esta linha serve para nao resetar a pagina ao enviar o form*/
    const value = document.querySelector("#entry")
    console.log(value.value);
    if (randomNumber == Number(value.value)){
        console.log("achou");
        toggleScreen()
        screen2.querySelector("p").innerText = `Acertou o número ${randomNumber} em ${attempts} tentativas`;
    }
    else{
        if(value.value > 10 || value.value < 0){
            
            window.alert(`o valor: ${value.value} é inválido.\n Tente novamente.`)
            
        }
        else if(attempts > 0){
            screen1.querySelector(".tries").classList.remove("hide")
            screen1.querySelector("p").innerText= `Ops, o número ${value.value} está errado`
            screen1.querySelector(".tries").innerText=`Tentativa de numero: ${attempts}`
            attempts++;
        }  
    }
}
function resetPage(){
    toggleScreen();
    randomNumber = Math.round(Math.random()*10);
}

function toggleScreen(){
    document.querySelector(".screen2").classList.toggle("hide");
    document.querySelector(".screen1").classList.toggle("hide");
}