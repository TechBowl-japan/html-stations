import { test, Locator } from '@playwright/test'
import { score } from 'wcag-color'

const getBackgroundRecursively = async (locator: Locator) => {
  return await locator.evaluate(elm => {
    let e: HTMLElement | null = elm as HTMLElement

    while (true) {
      if (!e) {
        break
      }

      const color = window.getComputedStyle(e).backgroundColor
      if (!['transparent', 'rgba(0, 0, 0, 0)'].includes(color)) {
        return color
      }

      e = e.parentElement
    }

    return '#ffffff'
  })
}

const getStyle = async (locator: Locator, propertyName: string) => {
  const style = await locator.evaluate((node, propertyName) => {
    return window.getComputedStyle(node).getPropertyValue(propertyName)
  }, propertyName)

  return style
}

test.beforeEach(async ({ page }) => {
  await page.goto('/station5.html')
  test.setTimeout(5000)
})

test('カードの背景色とタイトルのコントラスト値が十分に大きい', async ({
  page,
}) => {
  const cardTitle = await page.locator('.card__title') //.first()
  const bgColor = await getBackgroundRecursively(cardTitle)

  test
    .expect(score(bgColor, await getStyle(cardTitle, 'color')))
    .not.toBe('Fail')
})

test('`<img>`タグに必ず`alt`属性があること', async ({ page }) => {
  const img = await page.locator('img')
  await test
    .expect(await img.evaluate(elm => elm.hasAttribute('alt')))
    .toBe(true)
})
