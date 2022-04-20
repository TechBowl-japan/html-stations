/**
 * # スプレッド構文を使ってみよう！
 */

describe('Station22', () => {
  beforeEach(() => {
    cy.visit('/station22.html')
  })

  it('文言が表示される', () => {
    cy.get('#result').then((result) => {
      expect(result[0].innerHTML).eq("abcdefghijklmn")
    })
  })
})
