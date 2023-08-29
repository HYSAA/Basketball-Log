let res1=document.getElementById("outcome");
let res2=document.getElementById("result2")
let reset=document.getElementById("reset");
let reset1=document.getElementById("reset2");
let score=0;
let score1=0;
let allreset=document.getElementById("reset")
let game=document.getElementById("random")
function add1() {

    score+=1;
    res1.innerText=score;
    console.log(score)
}
function add2() {
    score+=2;
    res1.innerText=score;
    console.log(score)
}
function add3() {
    score+=3;
    res1.innerText=score;
    console.log(score)
}
function res() {
res1.innerHTML=""
res1.innerText=0;
score=0;
}


///GUEST
function add4() {
   
    score1+=1;
    res2.innerText=score1;
    console.log(score1)
}
function add5() {
    score1+=2;
    res2.innerText=score1;
    console.log(score1)
}
function add6() {
    score1+=3;
    res2.innerText=score1;
    console.log(score1)
}

function result() {
res2.innerHTML=""
res2.innerText=0;
score1=0;
}




game.addEventListener("click",function(){
    startGame()
})

const startGame = () =>{
const rand = {
    nums:Math.floor(Math.random()*3)+1 , 
    secondNum:Math.floor(Math.random()*3)+1
   };
console.log(rand.nums,rand.secondNum)

}


































console.log("2" + 2) //2 and 2
console.log(11 + 7) //18
console.log(6 + "5") //6 5
console.log("My points: " + 5 + 9) //My Points: 5 9
console.log(2 + 2) // 2 2 
console.log("11" + "14") // 25
console.log("2" + 2) //2 and 2
console.log(11 + 7) //18
console.log(6 + "5") //6 5
console.log("My points: " + 5 + 9) //My Points: 5 9
console.log(2 + 2) // 2 2 
console.log("11" + "14") // 25
console.log("2" + 2) //2 and 2
console.log(11 + 7) //18
console.log(6 + "5") //6 5
console.log("My points: " + 5 + 9) //My Points: 5 9
console.log(2 + 2) // 2 2 
console.log("11" + "14") // 25

