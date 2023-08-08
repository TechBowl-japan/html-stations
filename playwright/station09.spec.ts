import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/station9.html')
})

test('タブレットおよびスマートフォンでタイトルの文字が小さく表示される', async ({
  page,
}) => {
  let fontSize = 0

  await page.setViewportSize({
    width: 2000,
    height: 1000,
  })

  const title = await page.locator('.card__title').first()
  fontSize = await title.evaluate(node => {
    const computedStyle = window.getComputedStyle(node)
    return parseFloat(computedStyle.getPropertyValue('font-size'))
  })

  await page.setViewportSize({
    width: 768,
    height: 1000,
  })

  const titleMedium = await page.locator('.card__title').first()
  const fontSizeMedium = await titleMedium.evaluate(node => {
    const computedStyle = window.getComputedStyle(node)
    return parseFloat(computedStyle.getPropertyValue('font-size'))
  })

  expect(fontSizeMedium).toBeLessThan(fontSize)

  await page.setViewportSize({
    width: 320,
    height: 1000,
  })

  const titleSmall = await page.locator('.card__title').first()
  const fontSizeSmall = await titleSmall.evaluate(node => {
    const computedStyle = window.getComputedStyle(node)
    return parseFloat(computedStyle.getPropertyValue('font-size'))
  })

  expect(fontSizeSmall).toBeLessThan(fontSize)
})

test('スマートフォンで説明の文字が非表示になる', async ({ page }) => {
  await page.setViewportSize({
    width: 2000,
    height: 1000,
  })

  const description = await page.locator('.card__description').first()
  expect(await description.isVisible()).toBe(true)

  await page.setViewportSize({
    width: 320,
    height: 1000,
  })

  const descriptionSmall = await page.locator('.card__description').first()
  expect(await descriptionSmall.isVisible()).toBe(false)
})
