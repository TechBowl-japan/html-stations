/**
 * # 「if文を使えるようになろう！」 - if
 */

import { compareColor } from '../utils/compareColor'

describe('station27', () => {
  beforeEach(() => {
    cy.visit('/station27.html')
  })

  it('「赤色」ボタンを押すとテキストの背景色が赤色になる', () => {
    cy.get('button#red')
      .click()
      .then(() => {
        cy.get('p#text').then((text) => {
          expect(compareColor(text.css('background-color'), '#ff0000')).to.be
            .true
        })
      })
  })

  it('「青色」ボタンを押すとテキストの背景色が青色になる', () => {
    cy.get('button#blue')
      .click()
      .then(() => {
        cy.get('p#text').then((text) => {
          expect(compareColor(text.css('background-color'), '#0000ff')).to.be
            .true
        })
      })
  })
})
