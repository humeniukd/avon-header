import { newE2EPage } from '@stencil/core/testing';

describe('mobile-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mobile-menu></mobile-menu>');

    const element = await page.find('mobile-menu');
    expect(element).toHaveClass('hydrated');
  });
});
