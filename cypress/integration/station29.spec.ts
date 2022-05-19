/**
 * # 「ECMAScriptについて知ろう！」 - ECMAScript
 */

describe('station29', () => {
  beforeEach(() => {
    cy.visit('./station29.html')
  })

  it('ページを開いたときにアラートが表示される', () => {
    const stub = cy.stub()
    cy.on('window:alert', stub)

    cy.get('button')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('ECMAScript')
      })
  })
})
