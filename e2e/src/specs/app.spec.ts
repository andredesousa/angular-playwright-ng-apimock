import {
  expect, test, describe, beforeEach,
} from '../../fixtures';
import { AppPage } from '../page-objects/app.po';

describe('App', () => {
  let appPage: AppPage;

  beforeEach(({ page }) => {
    appPage = new AppPage(page);
  });

  test('should display welcome message', async () => {
    await appPage.navigateTo('/');

    await expect(appPage.getTitleText()).toHaveText('Angular app is running!');
  });
});
