/* **********************************************************
*                                                           *
*     Authores: Cairo Ramon - Cauê - F.Telles - Laura       *
*                                                           *
*********************************************************** */

//Carregar a página com o evento load e cria o header com H2 e o body com container
window.addEventListener("load",function(){
    createHeader();
    createPage(it);
});
//Variaveis Globais
const d = window.document;
const elBody = d.querySelector('body');

//Funcao para encurtar a criação de createElement
function cE(el){
    return el = d.createElement(el);
}
//ALterar para o modo Dark
function setNewTheme(){
    elBody.classList.toggle('modeDark');
    //.forEach(loop=>(loop.classList.toggle('itemDark')));
}
//Funcao para criar a página no container
function createPage(card){
    let elConst = cE('div');
    let elItem = cE('div');
    elConst.className = "container";
    elBody.append(elConst);
    for(num of card){
        let item =  cE('div');
        item.className = "item";
        elConst.append(item);
        item.innerHTML = `<img src=${num.src}><h2>${num.title}</h2><p>${num.text}</p>`;
    }
}
//Funcao para criar o Header da página H1 com o botão para alterar o tema
function createHeader(){
    let f1 = cE('div');
    let f2 = cE('div');
    let elButton = cE('button');
    let elDiv = cE('div');
    let elH1 = cE('h1');
    elButton.textContent = "Mudar Tema";
    f2.append(elButton);
    elH1.textContent = "A família dos felinos";
    f1.append(elH1);
    elBody.append(elDiv);
    elDiv.className = "section";
    elDiv.append(f1,f2);
    elButton.id = "alter";
    elButton.addEventListener("click",setNewTheme);
}
//Funcao de Fábrica ou Factory Function para criar os itens do card
function itens(title,text,src){
    return {
        title : title,
        text : text,
        src : src,
    }
}
//Constante array para armazenar os dados dos itens
const it = [];
it.push(
    itens("o tigre"," O tigre (Panthera tigris) é uma das espécies da subfamília Pantherina e (família Felidae)pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predadorcarnívoro e é a maior espécie de felino do mundo junto com o leão.","imagens/tiger.jpg"),
    itens("o leao","O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana(com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.","./imagens/leon.jpg"),
    itens("o leopardo","O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso  hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra(melanista)","./imagens/leopardo.jpg"),
    itens("a pantera negra","A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca).Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais.","./imagens/pantera-negra.jpg"),
    itens("o jaguar","O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).","./imagens/jaguar.jpg"),
    itens("o guepardo","O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre  mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros","./imagens/chita.jpg")
)