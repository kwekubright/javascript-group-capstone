/* eslint-disable import/no-cycle */
import { involvementApiBaseURL, involvementApiAppId } from './variables.js';
import Alert from './Alert.mod.js';
import { displayComments } from './RenderElement.mod.js';

export default class ApiServices {
  static pushComment = (id, comment, username) => {
    const url = `${involvementApiBaseURL}apps/${involvementApiAppId}/comments`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
        username,
        comment,
      }),
    };
    fetch(url, options)
      .then((res) => {
        if (res.status === 201) {
          Alert.success('Comment added successfully', document.querySelector('.alert-container'));
          const comments = this.getComments(id);
          displayComments(comments);
          document.querySelector('form').reset();
        } else {
          Alert.error('Something went wrong', document.querySelector('.alert-container'));
        }
      });
  }

  static getComments = async (id) => {
    const url = `${involvementApiBaseURL}apps/${involvementApiAppId}/comments?item_id=${id}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.error !== undefined) {
      return false;
    }

    return data;
  }
}

export const commentCount = (data) => data.length;