/**
 * # 「アクセシビリティ(a11y)を意識しよう！」 - Accessibility
 *
 * ## 概要
 * アクセシビリティに配慮したページに変更する．
 */

import { compareColor } from '../utils/compareColor'
import { score } from 'wcag-color'

const getBackgroundRecursively = (element: Element): string => {
  let e = element as Element | null

  while (true) {
    if (!e) {
      break
    }

    const color = window.getComputedStyle(e).backgroundColor
    if (!compareColor('transparent', color)) {
      return color
    }

    e = e.parentElement
  }

  return '#ffffff'
}

describe('Station5', function () {
  beforeEach(() => {
    // functionの前に必ず実行される
    // baseUrlのrootへ
    cy.visit('/station5.html')
  })

  it('カードの背景色とタイトルのコントラスト値が十分に大きい', function () {
    cy.get('.card__title').then((card) => {
      const bgColor = getBackgroundRecursively(card[0])
      expect(score(bgColor, card.css('color'))).not.eq('Fail')
    })
  })

  it('`<img>`タグに必ず`alt`属性があること', function () {
    cy.get('img').should('have.attr', 'alt')
  })
})
