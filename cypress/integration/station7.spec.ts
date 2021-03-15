/**
 * # 「使いまわせるようにスタイルを当てよう！」 - Learn the basics
 *
 * ## 概要
 * `.card`コンポーネントが複数あればよい？
 */

describe('Station7', function () {
  beforeEach(() => {
    // functionの前に必ず実行される
    // baseUrlのrootへ
    cy.visit('/station7.html')
  })

  it('has multiple cards', function () {
    cy.get('.card').then(card => {
      expect(card.length).to.be.gt(1)
    })
  })
})
