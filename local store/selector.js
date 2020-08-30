let london = document.getElementById('london');
let newyork = document.getElementById('newyork');
let paris = document.getElementById('paris');

function newyorkBtn(){
    london.style.display = 'none';
    paris.style.display = 'none';
    newyork.style.display = 'flex';
}
function parisBtn(){
    london.style.display = 'none';
    newyork.style.display = 'none';
    paris.style.display = 'flex';
}
function londonBtn(){
    newyork.style.display = 'none';
    paris.style.display = 'none';
    london.style.display = 'flex';
}