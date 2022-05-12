/**
 * Author:    Lee Coronilia
 * Created:   5.11.2022
 * Licensse: Public Domain
 **/
 // Attach an event listener to your button that does the following:
 // Gets the value of your input field
var button = document.getElementById('my-button');
button.addEventListener('click', function() {
    // Runs that value through your sort() or anagram() function and saves the results.
    //split string to array
    var userName = document.getElementById('user-name').value;
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    //sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    // Replaces the html in <div id=output> with the results.
    var username = document.querySelector('form');
    username.innerText = nameSorted;
 });
