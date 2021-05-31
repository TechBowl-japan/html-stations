/**
 * # 「mapを使えるようになろう！」 - Map
 */

describe('Station14', () => {
  beforeEach(() => {
    cy.visit('/station14.html')
  })

  it('フルネームのリストが表示される', () => {
    cy.get('#result').then((result) => {
      expect(result.children()[0].innerHTML).eq("大木 優")
      expect(result.children()[1].innerHTML).eq("山田 太郎")
    })
  })
})
