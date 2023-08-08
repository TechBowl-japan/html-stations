/**
 * # 「SEOを意識したHTMLを書いてみよう！」 - SEO Basics
 *
 * ## 概要
 * `<meta>`タグでOGPの設定をする．
 */

import { test, expect } from '@playwright/test'
import { isLeft, isRight } from 'fp-ts/lib/Either'
import { OgpVisitor } from '../utils/ogpValidator'

const cardTypes = ['summary', 'summary_large_image', 'app', 'player']

test.beforeEach(async ({ page }) => {
  await page.goto('/station6.html')
})

test('有効な`<meta>`OGPタグが存在する', async ({ page }) => {
  const metaTags = await page.locator('meta[property]').all()
  const visitor = new OgpVisitor()
  for (const metaTag of metaTags) {
    const property = (await metaTag.getAttribute('property')) ?? ''
    const content = (await metaTag.getAttribute('content')) ?? ''
    visitor.visitProperty(property, content)
  }

  const res = visitor.finalize()

  if (isLeft(res)) {
    const [errors] = res.left
    throw new Error(
      'parse failed due to error(s):\n' +
        errors.map(err => `(${err.type}) ${err.description ?? ''}`).join('\n'),
    )
  }

  expect(isRight(res)).toBeTruthy()
})

test('Twitter用の有効な`<meta>`タグが存在する', async ({ page }) => {
  const cardMeta = await page.locator('meta[name="twitter:card"]')
  const cardType = await cardMeta.getAttribute('content')
  expect(cardTypes.indexOf(cardType ?? '') !== -1).toBeTruthy()

  const twitterMeta = await page
    .locator('meta[name="twitter:site"],meta[name="twitter:creator"]')
    .all()
  for (const meta of twitterMeta) {
    const twitterId = await meta.getAttribute('content')
    expect(twitterId).toMatch(/^@(\w){1,15}$/)
  }
})
