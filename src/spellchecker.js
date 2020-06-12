function Spellcheck () {
}

Spellcheck.prototype.check = function (word) {
  const wordBank = ["spnelt", "correclty"]
  
  for (let i = 0; i < wordBank.length; i++) {
    console.log(wordBank[i])
    if (word === wordBank[i]) {
      return '~'+ wordBank[i] +'~'
    }
  }
  return word
}
