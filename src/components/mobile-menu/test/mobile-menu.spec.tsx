import { newSpecPage } from '@stencil/core/testing';
import { MobileMenu } from '../mobile-menu';

describe('mobile-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MobileMenu],
      html: `<mobile-menu></mobile-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <mobile-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mobile-menu>
    `);
  });
});
