const cards = document.querySelector('#cards');
const enviar = document.querySelector('#enviar');
const resposta = document.querySelector('#validar');
enviar.addEventListener('click',ler);
//limpar.addEventListener('click',limpar);

function validar(nome,descricao,url){
    if (nome.value.trim() !="" && descricao.value.trim() !="" && url.value.trim() !=""){
        escrever(nome,descricao,url);
        resposta.innerHTML = "";
    } else {
        resposta.innerHTML = `<strong>Preencha os campos!</strong>`;
    }
}
function ler(){
    let nome = document.querySelector('#nome');
    let descricao = document.querySelector('#descricao');
    let url = document.querySelector('#url');
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
    h1.className = 'article-title';
    img.src = url.value;
    p.className = 'article-text';
    cards.append(article); 
    article.append(img,h1)
    h1.append(p);
}