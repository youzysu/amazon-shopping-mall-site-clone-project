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
    const contentElement = this.element.querySelector('.content');
    const sidebarElement = this.element.querySelector('.sidebar');

    new Navbar(navbarElement, { handleDimmed: () => this.handleDimmed() });
    new Content(contentElement, { handleDimmed: () => this.handleDimmed() });
    new Sidebar(sidebarElement, { handleDimmed: () => this.handleDimmed() });
  }

  handleDimmed() {
    const backdropElement = this.element.querySelector('.backdrop');
    backdropElement.classList.toggle('active');
  }
}
