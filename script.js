let counter=0;
let counter1=0;
function add1(){
    counter=counter+1;
    document.getElementById('counter').innerText=counter;
}
function add2(){
    counter1=counter1+1;
    document.getElementById('counter1').innerText=counter1;
}
function minus1(){
    if(counter>0)
    counter=counter-1;
    document.getElementById('counter').innerText=counter;
}
function minus2(){
    if(counter1>0)
    counter1=counter1-1;
    document.getElementById('counter1').innerText=counter1;
}
function reset(){
    counter=0;
    document.getElementById('counter').innerText=counter;
    counter1=0;
    document.getElementById('counter1').innerText=counter1;
}