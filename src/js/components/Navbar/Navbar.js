import NavbarMain from '../Navbar/NavbarMain/NavbarMain.js';
import NavbarSub from '../Navbar/NavbarSub/NavbarSub.js';
import Component from '../base/Component.js';

export default class Navbar extends Component {
  constructor(element, props) {
    super(element, props);
  }
  getTemplate() {
    return `
<div class="navbar-main"></div>
<div class="navbar-sub"></div>
    `;
  }

  renderChildren() {
    const mainElement = this.element.querySelector('.navbar-main');
    const subElement = this.element.querySelector('.navbar-sub');

    new NavbarMain(mainElement);
    new NavbarSub(subElement);
  }
}
