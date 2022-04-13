/**
 * # 「ブロック要素とインライン要素の違いが分かるようになろう！」- Inline element and Block element
 */

describe('Station13', () => {
  beforeEach(() => {
    cy.visit('/station13.html')
  })

  it('<p>にcenterクラスが適用されている', () => {
    cy.get('p').should('have.class', 'center')
  })

  it('<a>にcenterクラスが適用されている', () => {
    cy.get('a').should('have.class', 'center')
  })

  it('<div>にcenterクラスが適用されている', () => {
    cy.get('div').should('have.class', 'center')
  })

  it('<span>にcenterクラスが適用されている', () => {
    cy.get('span').should('have.class', 'center')
  })
})
