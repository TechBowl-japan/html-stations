import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/station11.html')
})

test('文言が表示される', async ({ page }) => {
  const result = await page.locator('#result')
  expect(await result.innerText()).toBe('abcdefghijklmn')
})
