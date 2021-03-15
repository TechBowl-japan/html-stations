import { compareColor } from '../utils/compareColor'

// そのほか採点基準：
// CSSプロパティのクラス内の指定順については順不同

// MEMO: station1と同様，クラス名はとりあえずBEMに従わせます (@3c1u)

describe('Station3', () => {
  beforeEach(() => {
    cy.visit('/station3.html')
  })

  // 背景がbackground-colorで #fff or white, rgb(255,255,255)で指定してあること
  // background: white;(or #fff, rgb(255,255,255)) ↑も許可する。
  it('`カードの背景色が白（`#ffffff`）である', () => {
    cy.get('.card').then((card) => {
      expect(compareColor(card.css('background-color'), 'white')).to.be.true
    })
  })

  // titleとdescriptionのcolorについては，指定してあるカラーコード（3c1u注：#282828）による指定のみを許可する
  it('タイトルと説明の文字が指定された色（`#282828`）である', () => {
    cy.get('.card__title, .card__description').each((elm) => {
      expect(compareColor(elm.css('color'), '#282828')).to.be.true
    })
  })

  // card__img-topに対してwidthとheightは仕様通りの値のみ許可
  it('カードの画像の幅と高さが指定値を一致する', () => {
    cy.get('.card__img-top').then((elm) => {
      const { width, height } = window.getComputedStyle(elm[0])

      ;([
        [width, 'width', 288],
        [height, 'height', 182],
      ] as [string, string, number][]).forEach(([v, name, expected]) => {
        expect(
          parseInt(v),
          `CSS property "${name}" of ".card__img-top" should be "${expected}px"; given "${v}"`
        ).to.eq(expected)
      })
    })
  })

  // margin-bottom > 0px
  // card__img-topに対してmargin-bottomの指定は必須
  it('カードの画像に`margin-bottom`が指定されている', () => {
    cy.get('.card__img-top').then((elm) => {
      const { marginBottom } = window.getComputedStyle(elm[0])

      ;[[marginBottom, 'margin-bottom']].forEach(([v, name]) => {
        expect(
          parseInt(v),
          `CSS property "${name}" of ".card__img-top" should be greater than zero`
        ).to.gt(0)
      })
    })
  })

  // cardに対してpaddingが指定されていれば最低限良いものとします。
  // padding-* > 0px
  it('カードに`padding`が指定されている', () => {
    cy.get('.card').then((elm) => {
      const computedStyle = window.getComputedStyle(elm[0])
      const {
        paddingTop,
        paddingLeft,
        paddingBottom,
        paddingRight,
      } = computedStyle

      ;[
        [paddingTop, 'padding-top'],
        [paddingLeft, 'padding-left'],
        [paddingBottom, 'padding-bottom'],
        [paddingRight, 'padding-right'],
      ].forEach(([v, name]) => {
        expect(parseInt(v), `CSS property "${name}" of ".card" should be greater than zero`).to.gt(0)
      })
    })
  })
})
