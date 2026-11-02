import { test, expect } from '@playwright/test';

test.describe('EPAM client work navigation', () => {
  test('opens client work from services', async ({ page }) => {
    await page.goto('https://www.epam.com/');

    await page
      .getByRole('navigation', { name: 'Main navigation' })
      .getByRole('link', { name: 'Services' })
      .click();
    await page.getByRole('link', { name: 'view all case studies' }).click();

    await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
  });
});
