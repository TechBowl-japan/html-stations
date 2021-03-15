/**
 * # 「Tagを意味付けして使おう！」 - Writing Semantic HTML
 *
 * ## 概要
 * `<header>`および`<footer>`タグがあり，`<header>`の背景色が指定してあれば良い．
 */

import { compareColor } from '../utils/compareColor'

describe('Station4', function () {
  beforeEach(() => {
    // functionの前に必ず実行される
    // baseUrlのrootへ
    cy.visit('/station4.html')
  })

  it('has a <header> tag with white background', function () {
    cy.get('header')
      .should('exist')
      .then((header) => {
        expect(compareColor('#ffffff', header.css('background-color'))).to.be
          .true
      })
  })

  it('has a <footer> tag', function () {
    cy.get('footer').should('exist')
  })
})
