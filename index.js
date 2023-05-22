const number = document.querySelector(".number");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const pictures = document.querySelector(".pictures");
const miniatures = document.querySelector(".miniatures");




let num = 0;
number.textContent = num;
let amountOfPics = pictures.children.length - 1;
console.log(amountOfPics);
pictures.children[3].style.display = "block";



for (let i = 0; i < pictures.children.length; i++) {
    let url = pictures.children[i].src;
 miniatures.innerHTML += `<img data-index="${i}" src="${url}">`;
    
}
miniatures.onclick = (event) =>{
    pictures.children[num].style.display = "none";
    miniatures.children[num].classList.remove("currentFrame");
    num = event.target.dataset.index;
   console.log(event.target);
   pictures.children[num].style.display = "block";
   miniatures.children[num].classList.add("currentFrame");
}
miniatures.children[0].classList.add("currentFrame");



prev.onclick = () =>{
    pictures.children[num].style.display = "none";
    if(num === 0){
       num = amountOfPics
    }else{
      num--  
    }
    pictures.children[num].style.display = "block";
    number.textContent = num;
}

next.onclick = () =>{
    pictures.children[num].style.display = "none";
    if(num === amountOfPics){
        num = 0;
    }else{
        num++
    }
    pictures.children[num].style.display = "block";
    number. textContent = num;
}

