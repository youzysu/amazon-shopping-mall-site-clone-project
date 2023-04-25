import Component from '../../base/Component.js';
import Login from './Login.js';
import Search from './Search/Search.js';
import Shipping from './Shipping.js';

export default class NavbarMain extends Component {
  getTemplate() {
    return `
<h1 class="logo">
  <a href="/">
  <img class="amazon-icon" src="/src/assets/images/BI.svg" alt="amazon logo icon" />
  </a>
</h1>
<div class="shipping"></div>
<div class="search"></div>
<div class="nation">
  <img src="/src/assets/images/flag.svg" alt="flag icon" />
  <span class="main-text">KO</span>
</div>
<div class="login"></div>
<div class="my-page">
  <span class="label-text">반품</span>
  <span class="main-text">& 주문</span>
</div>
<div class="cart">
  <img src="/src/assets/symbols/cart.svg" alt="cart icon" />
  <span class="main-text">장바구니</span>
</div>
    `;
  }

  renderChildren() {
    const shippingElement = this.element.querySelector('.shipping');
    const searchElement = this.element.querySelector('.search');
    const loginElement = this.element.querySelector('.login');

    new Shipping(shippingElement);
    new Search(searchElement);
    new Login(loginElement);
  }

  setEvent() {
    this.addEvent('mouseover', '.shipping', () => {});
  }
}
