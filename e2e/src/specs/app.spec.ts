import {
  expect, test, describe, beforeEach,
} from '../../fixtures.po';

describe('App', () => {
  beforeEach(async ({ ngApimock }) => {
    await ngApimock.setNgApimockCookie();
  });

  test('should display welcome message', async ({ appPage }) => {
    await appPage.navigateTo('/');

    await expect(appPage.getTitleText()).toHaveText('Angular app is running!');
  });
});
