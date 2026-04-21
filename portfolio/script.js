AOS.init({
  duration:1000,
  once:true
});

const text = "Java Full Stack Developer";
let i = 0;

function typeEffect(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 70);
  }
}

typeEffect();