import { test, expect, Locator } from '@playwright/test'
import { compareColor } from '../utils/compareColor'

test.beforeEach(async ({ page }) => {
  await page.goto('/station3.html')
  test.setTimeout(5000)
})

const getStyle = async (locator: Locator, propertyName: string) => {
  const style = await locator.evaluate((node, propertyName) => {
    return window.getComputedStyle(node).getPropertyValue(propertyName)
  }, propertyName)

  return style
}

test('カードの背景色が白（`#ffffff`）である', async ({ page }) => {
  const card = await page.locator('.card')
  await expect(
    compareColor(await getStyle(card, 'background-color'), '#ffffff'),
  ).toBe(true)
})

test('タイトルと説明の文字が指定された色（`#282828`）である', async ({
  page,
}) => {
  const title = await page.locator('.card__title')
  const description = await page.locator('.card__description').first()

  const titleColor = await getStyle(title, 'color')
  const descriptionColor = await getStyle(description, 'color')

  await expect(
    compareColor(titleColor, '#282828'),
    `CSS property "color" of ".card__title" should be "#282828"; given "${titleColor}"`,
  ).toBe(true)
  await expect(
    compareColor(descriptionColor, '#282828'),
    `CSS property "color" of ".card__description" should be "#282828"; given "${descriptionColor}"`,
  ).toBe(true)
})

test('カードの画像の幅と高さが指定値と一致する', async ({ page }) => {
  const img = await page.locator('.card__img-top')

  const boundingBox = await img.boundingBox()

  if (!boundingBox) {
    throw new Error('boundingBox is null')
  }

  const { width, height } = boundingBox

  await expect(width).toBe(288)
  await expect(height).toBe(182)
})

test('カードの画像に`margin-bottom`が指定されている', async ({ page }) => {
  const img = await page.locator('.card__img-top')
  const marginBottom = await getStyle(img, 'margin-bottom')
  await expect(parseInt(marginBottom)).toBeGreaterThan(0)
})

test('カードにpaddingが指定されている', async ({ page }) => {
  const card = await page.locator('.card')
  const paddingTop = await getStyle(card, 'padding-top')
  const paddingRight = await getStyle(card, 'padding-right')
  const paddingBottom = await getStyle(card, 'padding-bottom')
  const paddingLeft = await getStyle(card, 'padding-left')

  await expect(parseInt(paddingTop)).toBeGreaterThan(0)
  await expect(parseInt(paddingRight)).toBeGreaterThan(0)
  await expect(parseInt(paddingBottom)).toBeGreaterThan(0)
  await expect(parseInt(paddingLeft)).toBeGreaterThan(0)
})
