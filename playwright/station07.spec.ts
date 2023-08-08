import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/station7.html')
})

test('`.card`が複数存在する', async ({ page }) => {
  const cards = await page.locator('.card').all()
  expect(cards.length).toBeGreaterThan(1)
})
