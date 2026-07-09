import { expect, test } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('renders the blog index and captures a full-page screenshot', async ({
  page,
}) => {
  await page.goto('/blog');
  await expect(
    page.getByRole('heading', {
      name: /Catatan engineering, produk, dan proses belajar/i,
    }),
  ).toBeVisible();

  const screenshotDirectory = path.join(process.cwd(), 'screenshots');
  fs.mkdirSync(screenshotDirectory, { recursive: true });

  await page.screenshot({
    path: path.join(screenshotDirectory, 'blog-full-page.png'),
    fullPage: true,
  });
});
