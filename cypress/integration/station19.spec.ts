/**
 * # 「CSSアニメーションを作ろう！」 - CSS Animation
 */

describe('Station19', () => {
  beforeEach(() => {
    cy.visit('/station19.html')
  })

  it('開いたときにアニメーションが走る', () => {
    cy.get('#animation').then((animation) => {
      const duration = Number(animation.css('animation-duration').slice(0, -1))
      expect(duration).to.be.greaterThan(0)
      expect(animation.css('animation-name')).not.to.be.eq('none')
    })
  })

  it('アニメーションが終わった後も要素が表示されている', () => {
    cy.get('#animation').then((animation) => {
      expect(animation.css('animation-fill-mode')).not.to.be.eq('none')
      expect(animation.css('animation-fill-mode')).not.to.be.eq('backwards')
    })
  })
})
