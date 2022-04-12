/**
 * # 「DOM APIを使ってみよう！」 - DOM API
 */

describe('station29', () => {
  beforeEach(() => {
    cy.clock()
    cy.visit('/station29.html')
  })

  it('最初はリストで表示されていない', () => {
    cy.get('#fuits').children('p').should('be.visible')
  })

  it('ボタンをクリックするとリスト表示される', () => {
    cy.get('[type="button"]').click()
    cy.get('#fuits > ul > li').should('be.visible')
  })
})
