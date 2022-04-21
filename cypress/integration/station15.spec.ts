/**
 * # 「標準仕様について知ろう！」 - WHATWG Living Standard, W3C Spec
 */

describe('Station15', () => {
  beforeEach(() => {
    cy.visit('/station15.html')
  })

  it('<article>, <section>が正しく使われている', () => {
    cy.get('body > article').should('be.visible')
    cy.get('article > section').should('be.visible')
  })

  it('<section>にwidth: 600px, margin-bottom: 50pxが適用されている', () => {
    cy.get('section').should('have.css', 'width', '600px')
    cy.get('section').should('have.css', 'margin-bottom', '50px')
  })
})
