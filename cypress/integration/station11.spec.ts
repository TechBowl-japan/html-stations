/**
 * # 「リストを作ろう！」 - HTML List
 */

describe('Station11', () => {
  beforeEach(() => {
    cy.visit('/station11.html')
  })

  it('<ul>が存在する', () => {
    cy.get('ul').should('be.visible')
  })

  it('<li>で囲われた「りんご」、「ばなな」、「どりあん」がそれぞれ表示されている', () => {
    cy.get('li').contains('りんご').should('be.visible')
    cy.get('li').contains('ばなな').should('be.visible')
    cy.get('li').contains('ぶどう').should('be.visible')
  })
})
