/**
 * # 「インデントを整えよう！」 - Code Format
 * 
 * ## 概要
 * リンターが通るかどうかについての問題．これに対してのテストは不要な気がする．
 */

describe('Station2', function () {
  beforeEach(() => {
    // functionの前に必ず実行される
    // baseUrlのrootへ
    cy.visit('/station2.html')
  })

  // FIXME: 機能していない
  it('`<html>`タグが存在する', function () {
    cy.get('html').should('be.visible')
  })
})
