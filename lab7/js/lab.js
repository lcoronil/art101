/**
 * Author:    Lee Coronilia
 * Created:   4.27.2022
 * Licensse: Public Domain
 **/

function sortUser() {
  var userName = prompt("Hey, please give me your name so I can fix it.");
  console.log("userName =", userName);
  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

//output
document.writeln("Here's your fixed name: ",
    sortUser(), "</br>");
