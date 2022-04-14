/**
 * # 「要素の重なりを扱えるようになろう！」 - position layout & other property
 */

describe('Station12', () => {
  beforeEach(() => {
    cy.visit('/station12.html')
  })

  it('赤色の要素が青色の要素より上になっている', () => {
    cy.get('#red').then((red) => {
      expect(Number(red.css('z-index'))).to.be.greaterThan(0)
    })
  })

  it('赤色の要素が透過されている', () => {
    cy.get('#red').then((red) => {
      expect(Number(red.css('opacity'))).to.be.lessThan(1)
    })
  })
})
