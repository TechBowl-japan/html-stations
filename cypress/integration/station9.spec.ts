/**
 * # 「レスポンシブ対応をしてみよう！」 - Responsive Design and Media Queries
 * 
 * ## 概要
 * レスポンシブレイアウトに対応させる．
 * medium/small画面でフォントサイズが小さくなれば良い．
 */

describe('Station9', () => {
  beforeEach(() => {
    cy.visit('/station9.html')
  })

  it('タブレットおよびスマートフォンでタイトルの文字が小さく表示される', () => {
    let fontSize = 0

    cy.viewport(2000, 1000)
    cy.get('.card__title').then((title) => {
      fontSize = parseFloat(title.css('font-size'))
    })

    cy.viewport(768, 1000)
    cy.get('.card__title').then((title) => {
      const fontSizeMedium = parseFloat(title.css('font-size'))
      expect(fontSizeMedium).lt(fontSize)
    })

    cy.viewport(320, 1000)
    cy.get('.card__title').then((title) => {
      const fontSizeSmall = parseFloat(title.css('font-size'))
      expect(fontSizeSmall).lt(fontSize)
    })
  })

  it('タブレットで説明の文字が小さく表示される', () => {
    let fontSize = 0

    cy.viewport(2000, 1000)
    cy.get('.card__description').then((title) => {
      fontSize = parseFloat(title.css('font-size'))
    })

    cy.viewport(768, 1000)
    cy.get('.card__description').then((title) => {
      const fontSizeMedium = parseFloat(title.css('font-size'))
      expect(fontSizeMedium).lt(fontSize)
    })
  })

  it('スマートフォンで説明の文字が非表示になる', () => {
    cy.viewport(2000, 1000)
    cy.get('.card__description').then((title) => {
      expect(title.css('display')).not.eq('none')
    })

    cy.viewport(320, 1000)
    cy.get('.card__description').then((title) => {
      expect(title.css('display')).eq('none')
    })
  })
})
