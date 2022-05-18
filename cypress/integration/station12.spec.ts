/**
 * # 「floatを使ってレイアウトを作ろう！」 - float
 */

describe('Station12', () => {
  beforeEach(() => {
    cy.visit('/station12.html')
  })

  it('#redと#blueが横並びになっている', () => {
    cy.get('#red').should('have.css', 'float', 'left')
    cy.get('#blue').should('have.css', 'float', 'left')
  })

  it('横並びになっている#redと#blueの下に#greenが表示されている', () => {
    cy.get('#green').should('have.css', 'clear', 'both')
  })
})
