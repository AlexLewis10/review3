describe('Spellcheck', function() {
  let spellcheck

  beforeEach(function () {
      spellcheck = new Spellcheck()
  })

  describe('Returns the word with ~', function () {
    it('it returns "~spnelt~"', function () {
      expect(spellcheck.check()).toEqual('~spnelt~')
    })
  })
})