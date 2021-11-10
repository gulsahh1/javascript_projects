const text = document.querySelector("#text");
const btn = document.querySelector("#btn");
const color=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const randomColorCode=()=>{
    let hexCode='#';
    for (let i = 0; i < 6; i++) {
     
        hexCode +=color[Math.floor(Math.random()*color.length)];
    }
    return hexCode;

}

btn.addEventListener('click',() => {
    const colorCode=randomColorCode();
    text.innerText=colorCode;
    document.body.style.backgroundColor=colorCode;
})


