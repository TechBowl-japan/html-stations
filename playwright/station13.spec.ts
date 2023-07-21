import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/station13.html')
})

test('Arrowの文言が表示される', async ({ page }) => {
  const result = await page.locator('#result')
  expect(await result.innerText()).toBe('global data')
})
