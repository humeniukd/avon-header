import {Component, h, State, Prop} from '@stencil/core';

@Component({
  tag: 'mobile-menu',
  styleUrl: 'mobile-menu.scss',
  shadow: true,
})
export class MobileMenu {
  @Prop() categoryList = [];
  @Prop() settings = null;
  @State() menuOpen = false;
  @State() subMenuToggle = false;
  @State() menuLeftPosition = '-1000px';

  private toggleMenu() {
    this.menuLeftPosition = !this.menuOpen ? "0px" : "-1000px";
    this.menuOpen = !this.menuOpen;
  }

  toggleSubMenu(e) {
    let targetNode;
    if (e.target.nodeName == "svg")
      targetNode = e.target.parentElement.parentElement;
    else targetNode = e.target;
    let target = targetNode.childNodes[3];
    if (typeof target != "undefined") {
      target.style.right = this.subMenuToggle ? "1000px" : "0px";
      this.subMenuToggle = !this.subMenuToggle;
    } else {
      targetNode.parentElement.style.right = "1000px";
      this.subMenuToggle = false;
    }
  };

  render() {
    return (
      <div class="header-avon smartphone-only">
    <div class="topbar">
      <nav>
        <div class="mobile-menu">
          <div
            onClick={() => this.toggleMenu()}
            class={{ closeMenu: this.menuOpen }}
          >
            <span></span>
            <span></span>
            <span></span>
            <small>MENU</small>
          </div>
          <aside
            class="smartphone-only"
            style={{ left: this.menuLeftPosition }}
          >
            <div class="top_navigation">
              <ul class="mobNav" id="nav">
                {this.categoryList.map(category => (<li
                  class="mobNav__parent"
                  key={category.id}
                  onClick={e => this.toggleSubMenu(e)}
                >
                  {category.name} &rarr;
                  <ul class="mobNav__child">
                    <div class="goBackMenu">
                      &larr; { category.name }
                    </div>
                    {category.slug && (<li>
                        <avon-link link={`/c/${category.slug}`}>
                                   All { category.name }
                      </avon-link>
                    </li>)}
                    {category.children.map(subCategory => (
                      <li key={subCategory.id}>
                        {category.slug ? <avon-link
                          link={`/c/${category.slug}/${subCategory.slug}`}
                        >
                        { subCategory.name }
                      </avon-link> :
                      <avon-link link={`/c/${subCategory.slug}`}>
                        { subCategory.name }
                      </avon-link>}
                      </li>))}
                  </ul>
                </li>))}
              </ul>
            </div>
            {!this.subMenuToggle && <div class="top_navigation_desk">
              <div class="top-nav-link">
                <avon-link link="/products">Products</avon-link>
              </div>
              <div class="top-nav-link">
                <avon-link link="#">Quick Shop</avon-link>
              </div>
              <div class="top-nav-link">
                <avon-link link="#">Offers</avon-link>
              </div>
              <div class="top-nav-link">
                <avon-link link="#">Avon Loves Blogs</avon-link>
              </div>
              <div class="top-nav-link">
                <avon-link link="#">REP HUB</avon-link>
              </div>
            </div>}
          </aside>
        </div>
      </nav>
      <div class="logo">
        <a href="/">
          <img src={this.settings.logo || 'https://avon.europe-west1.gcp.storefrontcloud.io/homepage/logo.png'} class="header__logoImage"/>
        </a>
      </div>
      <div class="account-block">
        <div class="account">
          <svg viewBox="0 0 23.8 29.5" id="Svg_avatar-user">
            <path
              d="m 0,29.48381 c 0,0 0.39974,-11.36425 4.04061,-14.39467 4.90355,4.60886 9.16066,4.7208 14.83661,-10e-6 3.65566,3.10787 4.86136,14.39468 4.86136,14.39468 z"
              fill="currentColor"
            ></path>
            <ellipse
              cx="11.553617"
              cy="7.8760314"
              rx="7.9549513"
              ry="7.8760333"
              fill="currentColor"
            ></ellipse>
          </svg>
        </div>
        <div class="cart-bag">
          <avon-link link="/cart">
          <svg viewBox="0 0 21 21" id="Svg_bag" slot="link_slot">
            <path
              fill="currentColor"
              d="m 1.573013,0.95981479 17.995268,0 0,2.45390021 1.289871,0.7865065 -0.03146,14.4087985 c -0.214975,0.747788 -0.472995,1.289367 -1.761774,1.541553 l -16.9885398,0 C 1.0964915,20.037816 0.37578471,19.618757 0.31460259,18.420259 l 0,-14.282958 1.22695011,-0.6292052 z"
            ></path>
            <circle
              r="1.2898706"
              cy="7.3147874"
              cx="6.04037"
              class="whiteFill"
            ></circle>
            <circle
              class="whiteFill"
              cx="14.975083"
              cy="7.3147874"
              r="1.2898706"
            ></circle>
            <path
              d="m 6.6381147,8.4473566 c -0.029178,3.6032694 2.146418,4.6204984 4.0326393,4.6375324 1.86741,0.01686 3.659503,-1.470167 3.769505,-4.700453 l 1.25841,-0.125841 c -0.09959,4.565509 -2.467711,6.106906 -5.128022,6.10329 C 6.8231278,14.320164 5.3929038,11.946652 5.4111646,8.2271347 Z"
              class="whiteFill"
            ></path>
            <path
              d="m 2.9258041,2.1867649 15.2267659,0 -1.22695,1.2584104 0.471903,0.5977449 -13.7481329,0 0.5033641,-0.5977449 z"
              class="whiteFill"
            ></path>
          </svg>
          </avon-link>
          <span class="cart-count">1</span>
        </div>
      </div>
    </div>
    <search-bar />
  </div>);
  }

}
