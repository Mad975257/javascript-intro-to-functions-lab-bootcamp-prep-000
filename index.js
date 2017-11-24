function shout(string) {
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string){
    console.log("I can\'t hear you!");

  }else {
    console.log("come again");

  }

}
shout("hello")
whisper("Hello")
sayHiToGrandma("string")
