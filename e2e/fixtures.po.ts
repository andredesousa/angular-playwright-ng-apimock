import { test as base } from '@playwright/test';
import { ApiBaseClient } from './src/page-objects/base-client.po';
import { AppPage } from './src/page-objects/app.po';

export { expect } from '@playwright/test';

export const test = base.extend<{ ngApimock: ApiBaseClient, appPage: AppPage }>({
  ngApimock: async ({ page, baseURL, context }, use) => {
    await use(new ApiBaseClient(baseURL as string, page, context));
  },
  appPage: async ({ page }, use) => {
    await use(new AppPage(page));
  },
});

export const {
  describe, beforeEach, afterEach, beforeAll, afterAll,
} = test;
