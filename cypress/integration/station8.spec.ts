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
  it('The container of cards should be flexbox', () => {
    cy.get('.card').parent().should('have.css', 'display').should('eq', 'flex')
  })
})
