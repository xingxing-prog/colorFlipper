
const button = document.querySelector("button");
const canvas = document.querySelector("canvas");
/*button.addEventListener('click', ()=>canvas.style.background=getColor());*/
button.addEventListener('click', ()=>colorChanged());

const ctx = canvas.getContext('2d');


const span = document.querySelector("span");

function random(){
    let number = Math.floor(16*Math.random());
    return number.toString(16);s
}

function getColor(){
    let color = "#";
    for (let i = 0; i < 6; i++){
         color += random();
    }
    return color;
}

function colorChanged(){
    let color = getColor();
    document.querySelector("span").innerHTML = color;
    canvas.style.backgroundColor = color;


}

