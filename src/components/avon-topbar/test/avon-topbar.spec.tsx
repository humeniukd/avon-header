import { newSpecPage } from '@stencil/core/testing';
import { AvonTopbar } from '../avon-topbar';

describe('avon-topbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AvonTopbar],
      html: `<avon-topbar></avon-topbar>`,
    });
    expect(page.root).toEqualHtml(`
      <avon-topbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </avon-topbar>
    `);
  });
});
