import { test, expect, Locator } from '@playwright/test'
import { compareColor } from '../utils/compareColor'

const getStyle = async (locator: Locator, propertyName: string) => {
  const style = await locator.evaluate((node, propertyName) => {
    return window.getComputedStyle(node).getPropertyValue(propertyName)
  }, propertyName)

  return style
}

test.beforeEach(async ({ page }) => {
  await page.goto('/station4.html')
  test.setTimeout(5000)
})

test('<header>タグがあり，背景が白色である', async ({ page }) => {
  const header = await page.locator('header')

  await expect(header).toBeVisible()
  await expect(
    compareColor(await getStyle(header, 'background-color'), '#ffffff'),
  ).toBe(true)
})

test('<footer>タグがある', async ({ page }) => {
  const footer = await page.locator('footer')

  await expect(footer).toBeVisible()
})
