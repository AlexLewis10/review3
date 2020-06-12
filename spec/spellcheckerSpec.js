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
})