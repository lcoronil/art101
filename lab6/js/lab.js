/**
 * Author:    Lee Coronilia
 * Created:   4.25.2022
 * Licensse: Public Domain
 **/


// Define Variables
myTransport = ["bus" , "car" , "walk" ];

myMainRide = {
  make : "Honda",
  model : "Civic",
  color : "White",
  year : 2020,
  age : function() {
    return 2022 - age;
  }
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
