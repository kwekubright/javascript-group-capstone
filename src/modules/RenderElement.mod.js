import ApiServices, { commentCount } from './ApiServices.mod.js';

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

export const displayComments = (comments) => {
  comments.then((data) => {
    document.getElementById('comment-count').innerHTML = (commentCount(data) !== undefined) ? commentCount(data) : 0;
    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.innerHTML = '';
    data.forEach((comment) => {
      commentsContainer.innerHTML += `
      <div class="comment">
        <p>${comment.creation_date} ${comment.username}: ${comment.comment} </p>
      </div>
      `;
    });
  });
};