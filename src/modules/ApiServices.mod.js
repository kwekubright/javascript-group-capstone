import { involvementApiBaseURL, involvementApiAppId } from './variables.js';
import Alert from './Alert.mod.js';

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
        } else {
          Alert.error('Something went wrong', document.querySelector('.alert-container'));
        }
      });
  }
}