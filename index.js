let randomNumber1 = Math.floor((Math.random()*6)+1);
console.log(randomNumber1);

document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png")
console.log("For Image 1 : images/dice"+randomNumber1+".png")    



//For right side Image

let randomNumber2 = Math.floor((Math.random()*6)+1);
console.log(randomNumber2);

document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png")
console.log("For image 2 : images/dice"+randomNumber2+".png")    


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player One Wins";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML ="Player Two wins" ;
} else {
    document.querySelector("h1").innerHTML ="Game Draw!";
}
