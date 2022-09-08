var posts=[
    {"titulo":"Titulo","data":"22/08/2013", "img":"https://devporai.com.br/wp-content/uploads/2021/01/O-que-e-CRUD-740x414.jpg","text":"Breve descrição do post... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, cumque ipsa. Sint adipisci id molestiae corporis a iste, optio provident, assumenda vel, aliquid excepturi eveniet. Laudantium tenetur quidem tempore pariatur."},
    {"titulo":"Titulo","data":"22/08/2013","img":"" ,"text":"Descrição do post... Habitasse aenean curabitur convallis quisque quam turpis porttitor, orci donec mi turpis lacinia scelerisque elementum aliquam, maecenas tempor rutrum conubia dolor tortor. ac habitasse quisque himenaeos platea praesent class mollis, leo habitant inceptos id vivamus sem sociosqu, hendrerit facilisis bibendum nec aenean ligula. purus luctus metus lacinia gravida sed fames cubilia fusce, posuere fames libero leo at praesent non eget turpis, laoreet tempus habitant cras ut volutpat dapibus. hac himenaeos euismod dictum nostra a lorem imperdiet feugiat, fringilla nisi maecenas aenean leo placerat luctus nec porttitor, luctus turpis mattis himenaeos fermentum rhoncus viverra."}
    ];
    var feedContent = "";
    //atualizaFeed();

function addPost (Titulo,Data,Img,Text){
    viewPost();
    posts.unshift({"titulo":Titulo,"data":Data,"img":Img, "text":Text});
    console.log (posts);
    atualizaFeed();
}
// Recebimento do formulario
function enviar(){
    var Titulo = document.getElementById('Titulo').value;
    var Data = document.getElementById('Data').value;
    var Img = document.getElementById('Img').value;
    var Text = document.getElementById('Text').value;
    addPost(Titulo,Data,Img,Text);
}



function atualizaFeed(){
    let feed = document.getElementById('feed')
    for(let i=0; i<posts.length;i++){
        criadorPost(i);
    }
    feed.innerHTML = feedContent;
    feedContent = "";
}

function criadorPost (i){
    if(posts[i].img == ""){
        postTexto(i);
    } else{
        postImg(i);
    }
}

// Criação de posts
    //criar post com imagem
function postImg(i){
    feedContent += '<div class="postImg post"> <a href="#"><figure><img src='+posts[i].img+'></figure></a> <div class="tituloDescricao"> <a href="#"><h2>'+posts[i].titulo+'</h2><p>'+posts[i].text+'</p></a> </div> <div class="data">'+posts[i].data+'</div></div>'
}

    //criar post apenas de texto
function postTexto(i){
    feedContent += '<div class="postText post"><div class="tituloDescricao"><a href="#"><h2>'+posts[i].titulo+'</h2><p>'+posts[i].text+'</p></a></div><div class="data">'+posts[i].data+'</div></div>'
}
