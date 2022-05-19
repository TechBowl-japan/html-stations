/**
 * # 「バリデーションをしよう！」 - Validation check
 */

describe('Station21', () => {
  beforeEach(() => {
    cy.visit('/station21.html')
  })

  it('メールアドレスの入力欄のtypeがemail,必須になっている', () => {
    cy.get('form')
      .find('input#email')
      .should('have.attr', 'type', 'email')
      .and('have.attr', 'required')
  })

  it('パスワードの入力欄のtypeがpassword, 必須, 6文字以上になっている', () => {
    cy.get('form')
      .find('input#password')
      .should('have.attr', 'type', 'password')
      .and('have.attr', 'minlength', '6')
      .and('have.attr', 'required')
  })

  it('ニックネームの入力欄が20文字以下になっている', () => {
    cy.get('form')
      .find('input#nickname')
      .should('have.attr', 'type', 'text')
      .and('have.attr', 'maxlength', '20')
  })
})
