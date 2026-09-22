let T = 1;
function encenderBombilla() {
    let imagen = document.getElementById("bombilla");

    if (T == 1){
        imagen.src = "Bombilla.gif";
        T = 0;
    }else{
        imagen.src = "Bombilla2.gif";
        T = 1;
    }
}