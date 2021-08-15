import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'desktop-menu',
  styleUrl: 'desktop-menu.scss',
  shadow: true,
})
export class DesktopMenu {
  @Prop() data = null

  render() {
    return (<div class="header">
      <div class="header__row">
        <div class="header__logo">
          <a href="/">
            <img src="https://avon.europe-west1.gcp.storefrontcloud.io/homepage/logo.png" class="header__logoImage" />
          </a>
        </div>
        <div class="header-actions">
          <div class="searchBar">
            <input type="search" placeholder="Search for products" class="searchBar__input"/>
            <button class="button button-text searchBar__button">
              <svg viewBox="0 0 24 24" preserveAspectRatio="none" height="20">
                <path
                  d="M21.668 20.108l-3.59-3.562c2.803-3.588 2.508-8.698-.713-11.917A8.948 8.948 0 0010.998 2c-2.41 0-4.671.934-6.368 2.629A8.937 8.937 0 002 10.992c0 2.408.934 4.669 2.63 6.364a8.948 8.948 0 006.368 2.628 8.893 8.893 0 005.532-1.916l3.565 3.612c.22.221.492.32.786.32.295 0 .566-.123.787-.32.443-.417.443-1.13 0-1.572zm-3.884-9.116a6.723 6.723 0 01-1.992 4.792 6.777 6.777 0 01-4.794 1.99 6.773 6.773 0 01-4.795-1.99 6.769 6.769 0 01-1.991-4.792c0-1.818.712-3.514 1.991-4.791a6.777 6.777 0 014.795-1.99c1.819 0 3.516.711 4.794 1.99a6.729 6.729 0 011.992 4.791z">
                </path>
              </svg>
            </button>
          </div>
          <div class="header-icons">
            <button class="button button-text wishlistHeader">
              <svg viewBox="0 0 24 24" preserveAspectRatio="none" height="0.8rem">
                <path
                  d="M12 20.273a.85.85 0 01-.52-.177l-.442-.341c-4.064-3.13-6.517-5.018-7.945-7.539-1.369-2.409-1.204-4.31-.827-5.482.46-1.423 1.496-2.569 2.918-3.225A5.605 5.605 0 017.544 3c1.764 0 3.394.748 4.456 1.98C13.06 3.748 14.69 3 16.455 3c.834 0 1.628.17 2.36.507 1.422.657 2.458 1.801 2.918 3.226.379 1.17.542 3.072-.827 5.482-1.429 2.52-3.885 4.412-7.954 7.546l-.432.335a.856.856 0 01-.52.177zM7.544 4.69c-.587 0-1.14.118-1.647.351-.987.456-1.703 1.24-2.015 2.21-.394 1.218-.155 2.648.689 4.134 1.251 2.21 3.45 3.91 7.427 6.975 3.978-3.063 6.176-4.766 7.428-6.974.844-1.486 1.082-2.917.69-4.135-.314-.969-1.03-1.754-2.017-2.21a3.898 3.898 0 00-1.645-.35c-1.594 0-3.075.88-3.686 2.19a.849.849 0 01-1.54 0c-.61-1.31-2.09-2.19-3.684-2.19z"
                  style={{ height: '100%' }}></path>
              </svg>
              <span>(0)</span>
              Wishlist
            </button>
            <button class="button button-text">
              <a href="/cart">
                <div class="miniCart">
                  <svg viewBox="0 0 21 21" class="svg_bag">
                    <path
                      fill="currentColor"
                      d="m 1.573013,0.95981479 17.995268,0 0,2.45390021 1.289871,0.7865065 -0.03146,14.4087985 c -0.214975,0.747788 -0.472995,1.289367 -1.761774,1.541553 l -16.9885398,0 C 1.0964915,20.037816 0.37578471,19.618757 0.31460259,18.420259 l 0,-14.282958 1.22695011,-0.6292052 z"
                    ></path>
                    <circle
                      r="1.2898706"
                      cy="7.3147874"
                      cx="6.04037"
                      class="circle1 whiteFill"
                    ></circle>
                    <circle
                      class="whiteFill"
                      cx="14.975083"
                      cy="7.3147874"
                      r="1.2898706"
                    ></circle>
                    <path
                      d="m 6.6381147,8.4473566 c -0.029178,3.6032694 2.146418,4.6204984 4.0326393,4.6375324 1.86741,0.01686 3.659503,-1.470167 3.769505,-4.700453 l 1.25841,-0.125841 c -0.09959,4.565509 -2.467711,6.106906 -5.128022,6.10329 C 6.8231278,14.320164 5.3929038,11.946652 5.4111646,8.2271347 Z"
                      style={{
                        fill: '#fff',
                        fillRule: 'evenodd',
                        stroke: 'none',
                        strokeWidth: '1px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                      }}
                      class="whiteFill"
                    ></path>
                    <path
                      d="m 2.9258041,2.1867649 15.2267659,0 -1.22695,1.2584104 0.471903,0.5977449 -13.7481329,0 0.5033641,-0.5977449 z"
                      style={{
                        fill: '#fff',
                        fillRule: 'evenodd',
                        stroke: 'none',
                        strokeWidth: '1px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                      }}
                      class="whiteFill"
                    ></path>
                  </svg>
                  <span>(1)</span>
                  Shopping Bag
                </div>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div class="top_navigation_desk">
        <div class="top-nav-link">
          <avon-link link="/products" label="Products"></avon-link>
        </div>
        <div class="top-nav-link">
          <avon-link link="#" label="Quick Shop"></avon-link>
        </div>
        <div class="top-nav-link">
          <avon-link link="#" label="Offers"></avon-link>
        </div>
        <div class="top-nav-link">
          <avon-link link="#" label="Avon Loves Blogs"></avon-link>
        </div>
        <div class="top-nav-link">
          <avon-link link="#" label="REP HUB"></avon-link>
        </div>
      </div>
      <category-nav categories={this.data}></category-nav>
    </div>
    );
  }

}
