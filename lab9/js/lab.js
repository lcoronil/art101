/**
 * Author:    Lee Coronilia
 * Created:   5.4.2022
 * Licensse: Public Domain
 **/

  // assign output div to outputEl
var outputEl = document.getElementById("output");
  // create new element named new1El
var new1El = document.createElement("p");
  // change html attribute to say something new ?
new1El.innerHTML = "hello";
  // create another new element named new2El
var new2El = document.createElement("h");
  // change html attrib of new2El to say something else ?
new2El.innerHTML = "What's up";
  // append both new elements to output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

  // change font size
new1El.style.fontSize = "20pt";
new2El.style.dontSize = "20pt";
