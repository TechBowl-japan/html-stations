import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  // functionの前に必ず実行される
  // baseUrlのrootへ
  await page.goto('/station1.html')
  test.setTimeout(5000)
})

// FIXME: 機能していない
test('`<html>`タグが存在する', async ({ page }) => {
  // cy.get('html').should('be.visible')
  const html = await page.locator('html')
  await expect(html).toBeVisible()
})

test('`<img>`タグに`src`属性がある', async ({ page }) => {
  const img = await page.locator('img')
  await expect(img).toHaveAttribute(
    'src',
    './assets/image/railway-thumbnail.png',
  )
})

test('タイトルは`<p>`タグまたは`<span>`タグで，`id`および`class`属性をもたない', async ({
  page,
}) => {
  const body = await page.locator('body')
  const p = await body.locator('p').first()
  const span = await body.locator('span').first()
  const target = (await p.count()) === 0 ? span : p
  const className = await target.evaluate(node => node.className)
  const id = await target.evaluate(node => node.id)
  expect(className).toBe('')
  expect(id).toBe('')
})

test('サブタイトルは`<p>`タグで，`id`および`class`属性をもたない', async ({
  page,
}) => {
  const p = await page.locator('p').nth(1)
  const className = await p.evaluate(node => node.className)
  const id = await p.evaluate(node => node.id)
  expect(className).toBe('')
  expect(id).toBe('')
})
