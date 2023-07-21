import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/station12.html')
})

test('クリアの文言が表示される', async ({ page }) => {
  const result = await page.locator('#result')
  expect(await result.innerText()).toBe('Station12をクリア!')
})
