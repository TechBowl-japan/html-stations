/**
 * # 「FlexBoxを使ってレイアウトを作ろう！」 - Making Layouts
 *
 * ## 概要
 * `.card`のコンテナをFlexboxにする．
 */

describe('Station8', () => {
  beforeEach(() => {
    cy.visit('/station8.html')
  })
  
  //  コンテナが`display: flex`であること
  it('`.card`の親要素がFlexboxである', () => {
    cy.get('.card').parent().should('have.css', 'display').should('eq', 'flex')
  })
})
