function askName() {
  var n = prompt("Enter your name:")
  return n
}
function RanNum() {
 var C = Math.floor(Math.random() * 10) +1
 var H = Math.floor(Math.random() * 10) +1
 return C
}


function ComFunct(C, computer) {
do{
var C = Math.floor(Math.random() * 10) +1

computer = computer + C

alert(`computer new number is ${C}. \n\n\n Computer new number total is ${C}`)

} while (computer < 19)
}
function userFunc(H, human, decision) {
do{
  var H = Math.floor(Math.random() * 10) +1

  human = human + H
 
  alert(`person new number is ${H}. \n\n\n person new number total is ${H}`)

  if (human >= 20){
      break
  }

  var decison = prompt (`do you want to roll again if
you dont type "n"`)
 

} while ((human < 20) && ( decision == "n" ))
}
function gameFun() {
var computer = 0
return computer
}

var n = askName()

gameFun(RanNum(), ComFunct(), userFunc())