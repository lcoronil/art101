/**
 * Author:    Lee Coronilia
 * Created:   5.12.2022
 * Licensse: Public Domain
 **/


// Using jQuery, create buttons to add to the challenge, problems, and results sections of your document:
// Find the section you want to add the button to
// getting the html
var challenges = $("#challenges").html();
var problems = $("#problems").html();
var results = $("#results").html();


// Using jQuery, do the following for each button:
// Add a click event to each button
$("button-1").click(function(){
    var challenges = $("#challenges").html();
    // toggle class special
    $("#button-1").toggleClass("special");

 });
 $("button-2").click(function(){
    var problems = $("#problems").html();
    // toggle class special
    $("#button-2").toggleClass("special");
  });
  $("button-3").click(function(){
    var results = $("#results").html();
    // toggle class special
    $("#button-3").toggleClass("special");

   });
