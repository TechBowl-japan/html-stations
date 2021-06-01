/**
 * # 「Promiseを使ってみよう！」 - Promise
 */

describe('Station15', () => {
  beforeEach(() => {
    cy.clock()
    cy.visit('/station15.html')
  })

  it('最初は何も表示されない', () => {
    cy.get('#result').then((result) => {
      expect(result.children().length).eq(0)
    })
  })

  it('3秒後フルネームのリストが表示される', () => {
    cy.tick(3000)
    cy.wait(0)

    cy.get('#result').then((result) => {
      expect(result.children()[0].innerHTML).eq("大木 優")
      expect(result.children()[1].innerHTML).eq("山田 太郎")
    })
  })
})
