let dy = 0;

function viewPost(){
    if(dy==0){
        dy = 1;
        document.getElementById("newPost").style.display = "block";
        //document.getElementById("rodape").style.display = "none";
    }else{
        document.getElementById("newPost").style.display = "none";
        dy=0;
    }
}
