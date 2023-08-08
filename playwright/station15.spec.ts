import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/station15.html')
})

test('最初は何も表示されない', async ({ page }) => {
  const result = await page.locator('#result > *')
  await page.waitForTimeout(100)
  expect(await result.count()).toBe(0)
})

test('3秒後フルネームのリストが表示される', async ({ page }) => {
  await page.waitForTimeout(5000)

  const result = await page.locator('#result > *').all()

  expect(result.length).toBe(2)

  expect(await result[0].innerText()).toBe('大木 優')
  expect(await result[1].innerText()).toBe('山田 太郎')
})
