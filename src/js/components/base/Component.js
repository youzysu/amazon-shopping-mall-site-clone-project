export default class Component {
  element;
  props;
  state;

  constructor(element, props) {
    this.element = element;
    this.props = props;
    this.initState();
    this.setEvent();
    this.render();
  }

  initState() {}

  setEvent() {}

  render() {
    this.dropPreviousRender();

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.getTemplate();
    this.element.append(templateElement.content.cloneNode(true));

    this.renderChildren();
  }

  getTemplate() {
    return '';
  }

  renderChildren() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    console.log(this.state);
    this.render();
  }

  dropPreviousRender() {
    if (this.element.innerHTML) {
      this.element.innerHTML = '';
    }
  }

  addEvent(eventType, selector, callback) {
    this.element.addEventListener(eventType, (event) => {
      if (!event.target.closest(selector)) {
        return false;
      }
      callback(event);
    });
  }
}
