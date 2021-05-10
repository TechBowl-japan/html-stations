/**
 * # 「アロー関数を使えるようになろう！」 - Arrow Function Expressions
 */

describe('Station13', () => {
  beforeEach(() => {
    cy.visit('/station13.html')
  })

  it('Arrowの文言が表示される', () => {
    cy.get('#result').then((result) => {
      expect(result[0].innerHTML).eq("Arrow")
    })
  })
})
