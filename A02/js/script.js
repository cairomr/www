var d = window.document;
function nomeJogador(){
    let buscarNome = d.querySelector('input#nome');
    let guardarNome = d.querySelector('div#nomeJogador');
    let guardarNome2 = d.querySelector('td#nome2');
    guardarNome.innerHTML = buscarNome.value;
    guardarNome2.innerHTML = buscarNome.value;
}
function limpar(){
    d.querySelector('td#vitoriaPC').innerText = 0;
    d.querySelector('td#vitoriaPL').innerText = 0;
    d.querySelector('img#optionPC').src = 'img/logo.png';
    d.querySelector('img#optionPL').src = 'img/logo.png';
    d.querySelector('td#nome2').innerHTML = 'Player';
    d.querySelector('div#nomeJogador').innerHTML = 'Player';
    d.querySelector('input#nome').value = '';
    d.querySelector('div#resultado').innerHTML = 'Faça sua escolha!';
}
function jokenpo(id){
    let msg ='';
    let vitoriaPL = parseInt(d.querySelector('td#vitoriaPL').innerText);
    let vitoriaPC = parseInt(d.querySelector('td#vitoriaPC').innerText);
    let valorPC = pc();
    let valorPL = player(id);
    if(valorPC===valorPL){
        msg = 'Empate!';
    } else if(valorPC > valorPL && valorPC - valorPL === 1 || valorPC < valorPL && valorPC - valorPL === -2){
        msg = 'Você perdeu!';
        d.querySelector('td#vitoriaPC').innerText = vitoriaPC + 1;
        } else {
            msg = 'Você ganhou';
            d.querySelector('td#vitoriaPL').innerText = vitoriaPL + 1;
    }
    d.querySelector('div#resultado').innerText = msg;
}
function pc(){
    let max = 3;
    let min = 1;
    let local = 'optionPC';
    let id = pcJogada(max,min);
    mudarIMG(id,local);
    return id;
}
function player(id){
    let local = 'optionPL';
    mudarIMG(id,local);
    return id;
} 
function mudarIMG(id,local){
    if(id >=1 || id <=3){
        let element = d.getElementById(local);
        switch(id){
            case 1:
                element.src = 'img/pedra.png';
            break;
            case 2:
                element.src = 'img/papel.png';
            break;
            default:
                element.src = 'img/tesoura.png';
            break;
        }
    }
}

function pcJogada(max,min){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
