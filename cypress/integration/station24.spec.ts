/**
 * # 「モジュールのインポート/エクスポートを使えるようになろう！」 - Import/Export Statement
 */

describe('Station24', () => {
  beforeEach(() => {
    cy.visit('/station24.html')
  })

  it('クリアの文言が表示される', () => {
    cy.get('#result').then((result) => {
      expect(result[0].innerHTML).eq('Station24をクリア!')
    })
  })
})
