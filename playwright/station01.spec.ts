import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  // functionの前に必ず実行される
  // baseUrlのrootへ
  await page.goto('/station1.html')
  test.setTimeout(5000)
})


test('1. html タグが存在すること', async ({ page }) => {
  const html = await page.locator('html')
  // htmlタグが存在することを確認
  await expect(html).toHaveCount(1);
  // htmlタグが正常に記述してあることを確認する代わりに、attributeを確認する
  await expect(html).toHaveAttribute('lang', 'ja');
})


test('2. img タグに src 属性が正しく使えていること', async ({ page }) => {
  const img = await page.locator('img')
  await expect(img).toHaveAttribute(
    'src',
    './assets/image/railway-thumbnail.png',
  );
})


test('3. `TechTrainの使い方` は p タグ、span タグを使用し、id や class を使っていないこと', async ({
  page,
}) => {
  const titleP = await page.locator('p').filter({ hasText: 'TechTrain' });
  const titleSpan = await titleP.locator('span');

  await expect(titleP).toHaveCount(1);
  await expect(titleSpan).toHaveCount(1);

  await expect(await titleP.evaluate(el => !el.hasAttribute('id') && !el.hasAttribute('class'))).toBeTruthy();
  await expect(await titleSpan.evaluate(el => !el.hasAttribute('id') && !el.hasAttribute('class'))).toBeTruthy();
})


test('4. `Suguru Ohki` は p タグを使用し、id や class を使っていないこと', async ({
  page,
}) => {
  const subtitleP = await page.locator('p').filter({ hasText: 'Suguru' });

  await expect(subtitleP).toHaveCount(1);

  await expect(await subtitleP.evaluate(el => !el.hasAttribute('id') && !el.hasAttribute('class'))).toBeTruthy();
})