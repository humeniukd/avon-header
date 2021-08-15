import { newE2EPage } from '@stencil/core/testing';

describe('category-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<category-nav></category-nav>');

    const element = await page.find('category-nav');
    expect(element).toHaveClass('hydrated');
  });
});
