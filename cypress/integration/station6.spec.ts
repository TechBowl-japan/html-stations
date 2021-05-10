/**
 * # 「SEOを意識したHTMLを書いてみよう！」 - SEO Basics
 *
 * ## 概要
 * `<meta>`タグでOGPの設定をする．
 */

import { isLeft, isRight } from "fp-ts/lib/Either"
import { OgpVisitor } from "../utils/ogpValidator"

const cardTypes = [
  'summary',
  'summary_large_image',
  'app',
  'player',
]

describe('Station6', function () {
  beforeEach(() => {
    // functionの前に必ず実行される
    // baseUrlのrootへ
    cy.visit('/station6.html')
  })

  it('有効な`<meta>`OGPタグが存在する', function () {
    cy.get('meta[property]').should('exist').then(metaTags => {
      const visitor = new OgpVisitor()
      metaTags.each(function () {
        const property = this.getAttribute('property') ?? ''
        const content = this.getAttribute('content') ?? ''
        visitor.visitProperty(property, content)
      })

      const res = visitor.finalize()

      if (isLeft(res)) {
        const [errors, warnings, _] = res.left
        cy.on('fail', (error, _) => {
          error.name = 'ParseError'
          error.message = 'parse failed due to error(s):\n' + errors.map(err => `(${err.type}) ${err.description ?? ''}`).join('\n')
          throw error // throw error to have test still fail
        })
      }

      expect(isRight(res)).to.be.true
    })
  })

  it('Twitter用の有効な`<meta>`タグが存在する', function () {
    cy.get('meta[name="twitter:card"]').should('exist').then(cardMeta => {
      const cardType = cardMeta.last().attr('content')
      expect(cardTypes.indexOf(cardType) !== -1, `Twitter card type should be one of : "${cardTypes.join('", "')}"`).to.be.true
    })

    cy.get('meta[name="twitter:site"],meta[name="twitter:creator"]').then(cardMeta => {
      cardMeta.each((_, el) => {
        const twitterId = el.getAttribute('content')
        expect(twitterId).satisfy((v) => /^@(\w){1,15}$/.test(v), 'the values of twitter:site and twitter:creator should be valid Twitter ID')
      })
    })
  })
})
