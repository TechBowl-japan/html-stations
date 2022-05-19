/**
 * # 「SVGについて知ろう！」- SVG
 */

import { compareColor } from '../utils/compareColor'

describe('Station20', () => {
  beforeEach('Station20', () => {
    cy.visit('/station20.html')
  })

  it('svgのfillに#008000が適用されている', () => {
    cy.get('svg').then((svg) => {
      cy.get('rect').then((rect) => {
        expect(
          compareColor(svg.css('fill'), '#008000') ||
            compareColor(rect.css('fill'), '#008000')
        ).to.be.true
      })
    })
  })
})
