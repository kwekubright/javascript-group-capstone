export default class RenderElement {
  constructor(element, parent, position = 'beforeend', clearContent = false) {
    this.element = element;
    this.parent = parent;
    this.position = position;
    this.clearContent = clearContent;
  }

  render() {
    if (this.clearContent) {
      this.parent.innerHTML = '';
    }

    this.parent.insertAdjacentHTML(this.position, this.element);
  }
}