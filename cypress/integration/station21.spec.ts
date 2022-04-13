/**
 * # 「DevToolsのNetworkパネルを使えるようになろう！」 - DevTools Network panel
 */

describe('Station21', () => {
  beforeEach(() => {
    cy.clock()
    cy.visit('/station21.html')
  })

  it('<p>にレスポンス内容をコピペできている', () => {
    cy.get('p').then((p) => {
      const responseJson = JSON.parse(p[0].innerHTML)
      expect(responseJson.message).to.be.exist
      expect(responseJson.status).to.be.exist
    })
  })
})
