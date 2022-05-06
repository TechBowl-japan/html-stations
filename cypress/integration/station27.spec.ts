/**
 * # 「if文を使えるようになろう！」 - if
 */ import { compareColor } from '../utils/compareColor'

describe('station27', () => {
  beforeEach(() => {
    cy.visit('/station27.html')
  })

  it('トグルボタンがONのときテキストの背景色が赤色になる', () => {
    cy.get('#check')
      .check({ force: true })
      .then(() => {
        cy.get('p#text').then((text) => {
          expect(compareColor(text.css('background-color'), '#ff0000')).to.be
            .true
        })
      })
  })

  it('トグルボタンがOFFのときテキストの背景色が無色になる', () => {
    cy.get('#check')
      .uncheck({ force: true })
      .then(() => {
        cy.get('p#text').then((text) => {
          expect(compareColor(text.css('background-color'), '')).to.be.true
        })
      })
  })
})
