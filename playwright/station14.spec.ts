import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/station14.html')
})

test('フルネームのリストが表示される', async ({ page }) => {
  const result = await page.locator('#result > *').all()

  expect(result.length).toBe(2)

  expect(await result[0].innerText()).toBe('大木 優')
  expect(await result[1].innerText()).toBe('山田 太郎')
})
