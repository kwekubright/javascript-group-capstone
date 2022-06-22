export default class Alert {
  constructor(message, type, parent) {
    this.message = message;
    this.type = type;
    this.parent = parent;
  }

  show() {
    this.parent.innerHTML = '';
    const alert = document.createElement('div');
    alert.classList.add('alert');
    alert.classList.add('flex');
    alert.classList.add('flex-justify-center');
    alert.classList.add(`alert-${this.type}`);
    alert.innerHTML = `
      <p>${this.message}</p>
    `;
    this.parent.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 3000);
  }

  static success(message, parent) {
    const alert = new Alert(message, 'success', parent);
    alert.show();
  }

  static error(message, parent) {
    const alert = new Alert(message, 'error', parent);
    alert.show();
  }
}