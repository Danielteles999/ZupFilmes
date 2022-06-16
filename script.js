const API_KEY = '4c22358e1cd042789c083b0292573590';

function exibeNoticias () {
    let divTela = document.getElementById("tela");
    let texto = "";


    //Montar texto html das notícias
    let dados = JSON.parse(this.responseText);
    for (i=0; i<dados.articles.length; i++){
        let noticia = dados.articles[i];

        let data = new Date (noticia.publishedAt);

        texto = texto + `
        <div class="boxNoticia">
        <img src="${noticia.urlToImage}" alt="">
        <span class="titulo">${noticia.title}</span><br>
        <span class="creditos">${data.toLocaleDateString ()} - 
            ${noticia.source.name} - 
            ${noticia.author}</span><br>
        <span class="text">
        ${noticia.content} <a href="${noticia.url}">Leia mais ...</a>
        </span>
    </div> 
        `;
    };

    //Preencher o texto
    divTela.innerHTML = texto;
}


function execeutaPesquisa () {  
    let query = document.getElementById("txtPesquisa").value;

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xhr.send ();
}

document.getElementById("btnPesquisa").addEventListener("click", execeutaPesquisa);

