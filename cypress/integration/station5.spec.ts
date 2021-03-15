/**
 * # 「アクセシビリティ(a11y)を意識しよう！」 - Accessibility
 *
 * ## 概要
 * アクセシビリティに配慮したページに変更する．
 */

describe('Station5', function () {
  beforeEach(() => {
    // functionの前に必ず実行される
    // baseUrlのrootへ
    cy.visit('/station5.html')
  })

  it('has a <footer> tag', function () {
    cy.get('footer').should('exist')
  })
})
