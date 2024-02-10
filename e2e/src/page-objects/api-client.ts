import { BaseClient } from '@ng-apimock/base-client';
import { Page } from '@playwright/test';

export class PlaywrightClient extends BaseClient {
  page: Page;

  constructor(baseUrl: string, page: Page) {
    super({ baseUrl });
    this.page = page;
  }

  async openUrl(url: string): Promise<any> {
    this.page.goto(url);
  }

  async setCookie(name: string, value: string): Promise<any> {
    await this.page.route(/.*\/api\/.*/, async (route, request) => route.continue({
      headers: { ...request.headers(), [name]: value },
    }));
  }
}
