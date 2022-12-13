let changecolor; 
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    changecolor = 'yellow';
    } else if (event.key === 's') {
    changecolor = 'pink';
    } else if (event.key === 'd') {
    changecolor = 'cyan';
    }
    })

let div1 = document.querySelector('#div1').addEventListener('click',() =>{
    div1 = document.querySelector('#div1');
    div1.style.backgroundColor = changecolor;
})

let div2 = document.querySelector('#div2').addEventListener('click',() =>{
    div2 = document.querySelector('#div2');
    div2.style.backgroundColor = changecolor;
})

let div3 = document.querySelector('#div3').addEventListener('click',() =>{
    div3 = document.querySelector('#div3');
    div3.style.backgroundColor = changecolor;
})

let div4 = document.querySelector('#div4').addEventListener('click',() =>{
    div4 = document.querySelector('#div4');
    div4.style.backgroundColor = changecolor;
})