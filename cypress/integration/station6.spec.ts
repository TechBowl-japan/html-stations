/**
 * # 「SEOを意識したHTMLを書いてみよう！」 - SEO Basics
 *
 * ## 概要
 * `<meta>`タグでOGPの設定をする．
 */

import { isRight } from "fp-ts/lib/Either"
import { OgpVisitor } from "../utils/ogpValidator"

describe('Station6', function () {
  beforeEach(() => {
    // functionの前に必ず実行される
    // baseUrlのrootへ
    cy.visit('/station6.html')
  })

  it('has valid <meta> tags', function () {
    cy.get('meta[property]').should('exist').then(metaTags => {
      const visitor = new OgpVisitor()
      metaTags.toArray().forEach(el => {
        const property = el.getAttribute('property') ?? ''
        const content = el.getAttribute('content') ?? ''
        visitor.visitProperty(property, content)
      })

      const res = visitor.finalize()
      cy.log(JSON.stringify(res))
      expect(isRight(res)).to.be.true
    })
  })
})
