import { newSpecPage } from '@stencil/core/testing';
import { CategoryNav } from '../category-nav';

describe('category-nav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CategoryNav],
      html: `<category-nav></category-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <category-nav>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </category-nav>
    `);
  });
});
