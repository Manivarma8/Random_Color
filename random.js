let container = document.querySelector('.container');

for(let i = 0; i < 30; i++){
    let el = document.createElement('div');
    el.classList.add('box')
    
    container.appendChild(el)
}
const rams = document.querySelectorAll('.box')
console.log(rams);


Generate();
function Generate(){
    rams.forEach((ram)=>{
const randoms = Random();
ram.style.backgroundColor = "#" + randoms;
ram.textContent = "#" + randoms
console.log(randoms);
    })
}


function Random(){
    const randoms = "0123456789abcdefg"
    let colors = ""
    const limit = 6;
    for(let m = 0; m < limit; m++){
 
        const r1 = Math.floor(Math.random() * randoms.length)
     
        colors += randoms.substring(r1, r1 + 1)
        

    }
    return colors
}

Random()

