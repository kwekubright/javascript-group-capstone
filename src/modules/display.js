import fetchData from './fetctData.js';
import ApiServices from './ApiServices.mod.js';

const display = () => {
  // Execution
  fetchData();
};

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
}

export default display;