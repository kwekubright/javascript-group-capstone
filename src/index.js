import './styles/index.css';
import display from './modules/display.js';
import { showcase } from './modules/variables.js';
import processResult from './modules/processResult';

showcase.innerHtml = display();

processResult();