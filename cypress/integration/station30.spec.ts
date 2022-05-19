/**
 * # 「DOM APIを使ってみよう！」 - DOM API
 */

describe('station30', () => {
  beforeEach(() => {
    cy.clock()
    cy.visit('/station30.html')
  })

  it('最初はリストで表示されていない', () => {
    cy.get('#fruits').children('p').should('be.visible')
  })

  it('ボタンをクリックするとリスト表示される', () => {
    cy.get('button').click()
    cy.get('#fruits > ul > li').should('be.visible')
  })
})
