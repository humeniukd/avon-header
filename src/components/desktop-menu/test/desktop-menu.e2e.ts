import { newE2EPage } from '@stencil/core/testing';

describe('desktop-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<desktop-menu></desktop-menu>');

    const element = await page.find('desktop-menu');
    expect(element).toHaveClass('hydrated');
  });
});
