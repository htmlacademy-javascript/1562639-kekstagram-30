import {similarPhoto} from './data.js';
import { drawSimilarPhoto} from './picture.js';
import './big-picture.js';

const photos = similarPhoto();

drawSimilarPhoto(photos);
