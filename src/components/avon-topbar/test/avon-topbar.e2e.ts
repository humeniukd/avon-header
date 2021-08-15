import { newE2EPage } from '@stencil/core/testing';

describe('avon-topbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<avon-topbar></avon-topbar>');

    const element = await page.find('avon-topbar');
    expect(element).toHaveClass('hydrated');
  });
});
