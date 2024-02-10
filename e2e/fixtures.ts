import { test as base } from '@playwright/test';
import { PlaywrightClient } from './src/page-objects/api-client';

export { expect } from '@playwright/test';

export const test = base.extend<{ ngApimock: PlaywrightClient }>({
  ngApimock: async ({ page, baseURL }, use) => {
    await use(new PlaywrightClient(baseURL as string, page));
  },
});

export const {
  describe, beforeEach, afterEach, beforeAll, afterAll,
} = test;
