describe('Station9', () => {
  beforeEach(() => {
    cy.visit('/station9.html')
  })

  it('Title text should be smaller on medium/small', () => {
    let fontSize = 0

    cy.viewport(2000, 1000)
    cy.get('.card__title').then((title) => {
      fontSize = parseFloat(title.css('font-size'))
    })

    cy.viewport(768, 1000)
    cy.get('.card__title').then((title) => {
      const fontSizeMedium = parseFloat(title.css('font-size'))
      expect(fontSizeMedium).lt(fontSize)
    })

    cy.viewport(320, 1000)
    cy.get('.card__title').then((title) => {
      const fontSizeSmall = parseFloat(title.css('font-size'))
      expect(fontSizeSmall).lt(fontSize)
    })
  })

  it('Description text should be smaller on medium/small', () => {
    let fontSize = 0

    cy.viewport(2000, 1000)
    cy.get('.card__description').then((title) => {
      fontSize = parseFloat(title.css('font-size'))
    })

    cy.viewport(768, 1000)
    cy.get('.card__description').then((title) => {
      const fontSizeMedium = parseFloat(title.css('font-size'))
      expect(fontSizeMedium).lt(fontSize)
    })

    cy.viewport(320, 1000)
    cy.get('.card__description').then((title) => {
      const fontSizeSmall = parseFloat(title.css('font-size'))
      expect(fontSizeSmall).lt(fontSize)
    })
  })

  it('Description text should disappear on small', () => {
    cy.viewport(2000, 1000)
    cy.get('.card__description').then((title) => {
      expect(title.css('display')).not.eq('none')
    })

    cy.viewport(320, 1000)
    cy.get('.card__description').then((title) => {
      expect(title.css('display')).eq('none')
    })
  })
})
