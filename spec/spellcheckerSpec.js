describe('Spellcheck', function() {
  let spellcheck

  beforeEach(function () {
      spellcheck = new Spellcheck()
  })

  describe('Returns the word with ~', function () {
    it('it returns "spnelt"', function () {
      expect(spellcheck.check("spnelt")).toEqual('~spnelt~')
    })
    
    it("When given the word correclty it returns ~correclty~", function () {
      expect(spellcheck.check('correclty')).toEqual('~correclty~')
    })
  })
  
  describe('When a word a word is spelt correctly', function () {
    it('returns the word without modification', function () {
      expect(spellcheck.check("are")).toEqual('are')
    })
  })

  describe('Returns the string with the incorrect word correctly', function ( ) {
    it('returns the correct string', function () {
      expect(spellcheck.check('are spnelt')).toEqual("are ~spnelt~")
    })
  })

})