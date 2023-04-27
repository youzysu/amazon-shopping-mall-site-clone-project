import Navbar from './components/Navbar/Navbar.js';
import Component from './components/base/Component.js';

export class App extends Component {
  getTemplate() {
    return `
    <header class="navbar"></header>
    <main class="content"></main>
    <aside class="sidebar"></aside>
    <div class="backdrop"></div>
    `;
  }

  renderChildren() {
    const navbarElement = this.element.querySelector('.navbar');

    new Navbar(navbarElement);
  }
}
