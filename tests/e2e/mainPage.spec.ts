import { test, expect } from '@playwright/test'

test('Main page test', async ({ page, baseURL = '' }) => {
  await page.goto(baseURL, { waitUntil: 'networkidle' })
  await page.setViewportSize({ width: 1920, height: 1800 })
})
