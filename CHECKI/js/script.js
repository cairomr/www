window.addEventListener("load",setCard);

function setCard(){
    let cards = document.querySelector("#cards");
    let enviar = document.querySelector("#enviar");
    let limpar = document.querySelector("#limpar");
    let config = {
        escrever:function(title,description,url){ 
            
            let article = document.createElement("article");        
                cards.appendChild(article);
                article.className = 'article-text';
                article.innerHTML = `<img class="article-img" src=${url.value}>
                                <h1 class="article-title">${title.value}</h1>
                                <p>${description.value}</p>
                                <div class="trash"><img src="img/trash-2-32.png"></div>`;
        },
        validar:function(nome,description,url){
            let msg = document.querySelector("#msg");
            if (nome.value.trim() !="" && description.value.trim() !="" && url.value.trim() !=""){
                config.escrever(nome,description,url);
                msg.innerHTML = "";
            } else {
                msg.innerHTML = `<strong>Preencha os campos!</strong>`;
            }
        },
        ler:function(){
            let title = document.querySelector('#nome');
            let description = document.querySelector('#descricao');
            let url = document.querySelector('#url');
            config.validar(title,description,url);
        },
        remover:function(event){
            cards.removeChild(event.target.parentNode.parentNode);
        },
        limpar:function(){
            while(cards.firstChild){
                cards.removeChild(cards.lastChild)
            }
        },
        //Apenas outra forma de criar elementos
        escrever2:function(nome,descricao,url){
            let article = document.createElement('article');
            let img = document.createElement('img');
            let h1 = document.createElement('h1');
            let p = document.createElement('p');
            let div = document.createComment('div');
            p.innerHTML = descricao.value;
            img.className = 'article-img';
            h1.innerHTML = nome.value;
            h1.className = 'article-title';
            img.src = url.value;
            p.className = 'article-text';
            cards.append(article); 
            article.append(img,h1)
            h1.append(p);
            article.append(div);
            div.append(p);
        }
    }
        enviar.addEventListener('click',config.ler);
        cards.addEventListener('click',event => {config.remover(event)});
        limpar.addEventListener('click',config.limpar);
}