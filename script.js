let dy = 0;
function newpost(){
    if(dy==0){
        dy = 1;
        document.getElementById("newPost").style.display = "block";
    }else{
        document.getElementById("newPost").style.display = "none";
        dy=0;
    }
}

function enviar(){
    var Titulo = document.getElementById('Titulo');
    var Descricao = document.getElementById('Descricao');
    var img = document.getElementById('img');
    var Data = document.getElementById('Data');
    newpost();
    criarPost();
}

function criarPost(){
    var principal = document.getElementById('principal')
    var posts = document.getElementsByClassName('post');
    //var posts = []

    var Post = document.createElement("div");
    Post.setAttribute("class", "post")

    var Figure = document.createElement("figure")
    var Imagem = document.createElement("img")
    Imagem.setAttribute("src", img.value)

    var areaTexto = document.createElement("div")
    areaTexto.setAttribute("class", "tituloDescricao")
    var tituloPost = document.createElement("h2")
    tituloPost.textContent = Titulo.value
    var DescriçãoPost = document.createElement("p")
    DescriçãoPost.textContent =  Descricao.value

    var Date = document.createElement("div")
    Date.setAttribute("class", "data")
    Date.textContent = Data.value;


    var linkTexto  = document.createElement("a")
    linkTexto.setAttribute("href", "#")

    var linkImagem = document.createElement("a")
    linkImagem.setAttribute("href", "#")

    Post.appendChild(linkImagem);
    linkImagem.appendChild(Figure)
    Figure.appendChild(Imagem);

    Post.appendChild(areaTexto);
    areaTexto.appendChild(linkTexto)
    linkTexto.appendChild(tituloPost)
    linkTexto.appendChild(DescriçãoPost)

    Post.appendChild(Date)

    principal.insertBefore(Post , posts[0]);
}