// Recebimento do formulario
function enviar(){
    var Titulo = document.getElementById('Titulo').value;
    var Descricao = document.getElementById('Descricao').value;
    var img = document.getElementById('img').value;
    var Data = document.getElementById('Data').value;
    viewPost();
    if(img.lengh = 0){
        postTexto();
    } else{
        postImg();
    }
    console.log (img);
}

function criarPost(Post){
    let feed = document.getElementById('feed')
    let posts = document.getElementsByClassName('post');
    

    feed.insertBefore(Post , posts[0]);
}

// Criação de posts
    //criar post com imagem
function postImg(){
    let Post = document.createElement("div");
    Post.setAttribute("class", "postImg")

    let Figure = document.createElement("figure")
    let Imagem = document.createElement("img")
    Imagem.setAttribute("src", img.value)

    let areaTexto = document.createElement("div")
    areaTexto.setAttribute("class", "tituloDescricao")
    let tituloPost = document.createElement("h2")
    tituloPost.textContent = Titulo.value
    let DescriçãoPost = document.createElement("p")
    DescriçãoPost.textContent =  Descricao.value

    let Date = document.createElement("div")
    Date.setAttribute("class", "data")
    Date.textContent = Data.value;

    let linkTexto  = document.createElement("a")
    linkTexto.setAttribute("href", "#")

    let linkImagem = document.createElement("a")
    linkImagem.setAttribute("href", "#")

    Post.appendChild(linkImagem);
    linkImagem.appendChild(Figure)
    Figure.appendChild(Imagem);

    Post.appendChild(areaTexto);
    areaTexto.appendChild(linkTexto)
    linkTexto.appendChild(tituloPost)
    linkTexto.appendChild(DescriçãoPost)
    Post.appendChild(Date)
    criarPost(Post);
}

    //criar post apenas de texto
function postTexto(){
    let Post = document.createElement("div");
    Post.setAttribute("class", "postImg")

    let areaTexto = document.createElement("div")
    areaTexto.setAttribute("class", "tituloDescricao")
    let tituloPost = document.createElement("h2")
    tituloPost.textContent = Titulo.value
    let DescriçãoPost = document.createElement("p")
    DescriçãoPost.textContent =  Descricao.value

    let Date = document.createElement("div")
    Date.setAttribute("class", "data")
    Date.textContent = Data.value;

    let linkTexto  = document.createElement("a")
    linkTexto.setAttribute("href", "#")

    Post.appendChild(areaTexto);
    areaTexto.appendChild(linkTexto)
    linkTexto.appendChild(tituloPost)
    linkTexto.appendChild(DescriçãoPost)
    Post.appendChild(Date)
    criarPost(Post);
}