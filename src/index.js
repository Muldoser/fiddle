/** index.js
 * We use separate files for running web separately (`target: web`).
 * `fs` for example, can not be used when using `target: web`
 * This way we can fiddle client- and server side without certain functionality causing crashes.
 */

import './style.css';
import './components/note/note.css';
import note from './components/note';

/**
 * Append stuff to the innerHTML
 * @param {*} input
 */
function print(input) {
  const temp1 = document.getElementById('fiddle');
  temp1.innerHTML += input;
};

print(note);
