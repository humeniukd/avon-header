import { newSpecPage } from '@stencil/core/testing';
import { DesktopMenu } from '../desktop-menu';

describe('desktop-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DesktopMenu],
      html: `<desktop-menu></desktop-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <desktop-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </desktop-menu>
    `);
  });
});
