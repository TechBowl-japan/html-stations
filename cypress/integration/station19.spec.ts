/**
 * # 「SVGについて知ろう！」- SVG
 */

import { compareColor } from '../utils/compareColor'

describe('Station19', () => {
  beforeEach('Station19', () => {
    cy.visit('/station19.html')
  })

  it('svgのfillに#008000が適用されている', () => {
    cy.get('svg').then((svg) => {
      expect(compareColor(svg.css('fill'), '#008000')).to.be.true
    })
  })
})
