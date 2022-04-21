/**
 * # 「CSSアニメーションを作ろう！」 - CSS Animation
 */

describe('Station18', () => {
  beforeEach(() => {
    cy.visit('/station18.html')
  })

  it('開いたときにアニメーションが走る', () => {
    cy.get('#animation').then((animation) => {
      const duration = Number(animation.css('animation-duration').slice(0, -1))
      expect(animation.css('animation-name')).not.to.be.eq('none')
      expect(duration).to.be.greaterThan(0)
    })
  })

  it('アニメーションが終わった後も要素が表示されている', () => {
    cy.get('#animation').should('have.css', 'animation-fill-mode', 'forwards')
  })
})
