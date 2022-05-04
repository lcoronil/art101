/**
 * Author:    Lee Coronilia
 * Created:   5.4.2022
 * Licensse: Public Domain
 **/

// output div
outputEl = document.getElementById("output");
 // new div
new1El = document.createElement("p");

new1El.innerHTML = "hello";

new2El = document.createElement("h");

new2El.innerHTML = "What's up";

outputEl.appendChild(new1El, new2El);
