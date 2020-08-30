let position = 0;
function leftClick(){
    let slider = document.getElementById('slider_wrapper');
    position = position + 570;
    if (position = 0){
        position = 0
    }
    slider.style.transform = "translateX(" + position + "px)";
}
function rightClick(){
    let slider = document.getElementById('slider_wrapper');
    position = position - 570;
    if (position < -1140){
        position = 0;
    }
    slider.style.transform = "translateX("+ position + "px)";
}