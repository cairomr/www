const cards = document.querySelector('#cards');
const btn = document.querySelector('#enviar');
const resposta = document.querySelector('#validar');
btn.addEventListener('click',ler);

function validar(nome,descricao,url){
    if (nome.value.trim() !="" && descricao.value.trim() !="" && url.value.trim() !=""){
        escrever(nome,descricao,url);
        resposta.innerHTML = "";
    } else {
        resposta.innerHTML = `<strong>Necessário Preencher\n os dados do Form!</strong>`;
    }
}
function ler(){
    const nome = document.querySelector('#nome');
    const descricao = document.querySelector('#descricao');
    const url = document.querySelector('#url');
    validar(nome,descricao,url);
}

function escrever(nome,descricao,url){
    let article = document.createElement('article');
    let img = document.createElement('img');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    p.innerHTML = descricao.value;
    img.className = 'article-img';
    h1.innerHTML = nome.value;
    img.src = url.value;
    cards.append(article); 
    article.append(img,h1)
    h1.append(p);
}