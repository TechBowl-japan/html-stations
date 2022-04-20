/**
 * # 「モジュールのインポート/エクスポートを使えるようになろう！」 - Import/Export Statement
 */

describe('Station23', () => {
  beforeEach(() => {
    cy.visit('/station23.html')
  })

  it('クリアの文言が表示される', () => {
    cy.get('#result').then((result) => {
      expect(result[0].innerHTML).eq('Station23をクリア!')
    })
  })
})
