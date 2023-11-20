
import { drawSimilarPhoto } from './picture.js';
import { setUserFormSubmit } from './form.js';
import { getData } from './api.js';
import { showDataErrorMessage} from './util.js';
import {showSuccesMessage, showErrorMessage } from './message.js';


getData(
  (photos) => drawSimilarPhoto(photos),
  () => showDataErrorMessage()
);

setUserFormSubmit(showSuccesMessage, showErrorMessage);
