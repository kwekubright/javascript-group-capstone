// import fetchLikes from './modules/fetchLikes';
import './styles/index.css';
import Like from './modules/postLikes';
import display from './modules/display.js';
import { showcase } from './modules/variables.js';

showcase.innerHtml = display();

let postLike = new Like;

postLike.post();