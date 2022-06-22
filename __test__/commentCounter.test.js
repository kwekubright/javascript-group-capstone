/* eslint-disable no-unused-expressions */
import { commentCount } from '../src/modules/ApiServices.mod.js';

const mockAPIResponse = [
  {
    comment: 'This is nice!',
    creation_date: '2021-01-10',
    username: 'John',
  },
  {
    comment: 'Great content!',
    creation_date: '2021-02-10',
    username: 'Jane',
  },
  {
    comment: 'This is great!',
    creation_date: '2021-03-10',
    username: 'John',
  },
  {
    comment: 'This is nice!',
    creation_date: '2021-04-10',
    username: 'Jane',
  },
];

describe('commentCount', () => {
  test('should return the number of comments as 4', () => {
    expect(commentCount(mockAPIResponse)).toBe(4);
  });

  test('should return the number of comments as 0', () => {
    expect(commentCount([])).toBe(0);
  });
});
