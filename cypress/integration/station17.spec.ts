/**
 * # 「Gridlayoutを使えるようになろう！」 - Gridlayout
 */

describe('Station17', () => {
  beforeEach(() => {
    cy.clock()
    cy.visit('/station17.html')
  })

  it('レイアウトがGridlayoutになっている', () => {
    cy.get('#container').should('have.css', 'display', 'grid')
  })

  it('ヘッダーが指定の位置にある', () => {
    cy.get('header')
      .should('have.css', 'grid-row', '1 / 2')
      .and('have.css', 'grid-column', '1 / 3')
  })

  it('フッターが指定の位置にある', () => {
    cy.get('footer')
      .should('have.css', 'grid-row', '5 / 6')
      .and('have.css', 'grid-column', '1 / 3')
  })

  it('アイテム1が指定の位置にある', () => {
    cy.get('div')
      .contains('アイテム1')
      .should('have.css', 'grid-row', '2 / 5')
      .and('have.css', 'grid-column', '1 / 2')
  })

  it('アイテム2が指定の位置にある', () => {
    cy.get('div')
      .contains('アイテム2')
      .should('have.css', 'grid-row', '2 / 3')
      .and('have.css', 'grid-column', '2 / 3')
  })

  it('アイテム3が指定の位置にある', () => {
    cy.get('div')
      .contains('アイテム3')
      .should('have.css', 'grid-row', '3 / 4')
      .and('have.css', 'grid-column', '2 / 3')
  })

  it('アイテム4が指定の位置にある', () => {
    cy.get('div')
      .contains('アイテム4')
      .should('have.css', 'grid-row', '4 / 5')
      .and('have.css', 'grid-column', '2 / 3')
  })
})
