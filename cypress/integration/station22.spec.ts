/**
 * # スプレッド構文を使ってみよう！
 */

describe('Station11', () => {
  beforeEach(() => {
    cy.visit('/station11.html')
  })

  it('文言が表示される', () => {
    cy.get('#result').then((result) => {
      expect(result[0].innerHTML).eq("abcdefghijklmn")
    })
  })
})
