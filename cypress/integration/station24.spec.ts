/**
 * # 「アロー関数を使えるようになろう！」 - Arrow Function Expressions
 */

describe('Station24', () => {
  beforeEach(() => {
    cy.visit('/station24.html')
  })

  it('Arrowの文言が表示される', () => {
    cy.get('#result').then((result) => {
      expect(result[0].innerHTML).eq('global data')
    })
  })
})
