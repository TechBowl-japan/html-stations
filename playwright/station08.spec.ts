import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/station8.html')
})

test('`.card`の親要素がFlexboxである', async ({ page }) => {
  const cardContainer = await page
    .locator('.card')
    .first()
    .evaluateHandle(elem => elem.parentElement)

  expect(
    await cardContainer.evaluate(node => {
      const computedStyle = window.getComputedStyle(node)
      return computedStyle.display
    }),
  ).toBe('flex')
})
