import { BaseClient } from '@ng-apimock/base-client';
import { BrowserContext, Page } from '@playwright/test';

export class ApiBaseClient extends BaseClient {
  private page: Page;

  private context: BrowserContext;

  constructor(baseUrl: string, page: Page, context: BrowserContext) {
    super({ baseUrl });
    this.page = page;
    this.context = context;
  }

  async openUrl(url: string): Promise<any> {
    await this.page.goto(url);
  }

  async setCookie(name: string, value: string): Promise<any> {
    await this.context.addCookies([{ name, value, url: this.baseUrl }]);
  }
}
