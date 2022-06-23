import './styles/index.css';
import display from './modules/display.js';
import { showcase } from './modules/variables.js';
import { fetchData } from './modules/Api';
showcase.innerHtml = display();
fetchData()