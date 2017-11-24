function shout(string) {
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function sayHiToGrandma('string') {
  if ('string' === 'string'.toLowerCase()){
    console.log("I can\'t hear you!")

  }else {
    console.log("come again")

  }

}
shout("hello")
whisper("Hello")
sayHiToGrandma("string")
