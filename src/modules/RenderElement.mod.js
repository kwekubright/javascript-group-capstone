import ApiServices from './ApiServices.mod.js';

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

export const displayComments = (id) => {
  const comments = ApiServices.getComments(id);
  comments.then((data) => {
    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.innerHTML = '';
    data.forEach((comment) => {
      commentsContainer.innerHTML += `
      <div class="comment-${id}">
        <p>${comment.creation_date} ${comment.username}: ${comment.comment} </p>
      </div>
      `;
    });
  });
};