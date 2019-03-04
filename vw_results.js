"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Trent Peterson
   Date:   3/1/19
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
// This starts a variable to input code into the html
var reportHTML = "<h1>" + raceTitle + "</h1>"
// This for loop adds the different districts and all of the info in those districts by calling in functions that are created later 
for (var i = 0; i < race.length; i++) {
    // This is used to find the total votes by adding each of the values for votes together for each disrtict  
    var totalVotes = 0;
    votes[i].forEach(function calcSum(value) {
        totalVotes += value;
    })
    // THis adds html code and at the start of each of the tables
    reportHTML += "<table> <caption>" + race[i] + "</caption> <tr><th>Candidate</th><th>Votes</th></tr>";
    // this calls in a function
    reportHTML += candidateRows([i], totalVotes);
    reportHTML += "</table>";
}
// THis calls in the html previously created
document.getElementsByTagName("section")[0].innerHTML = reportHTML;
// THis is a function that is called in above that makes it for each of the districts it finds the right canidates, parts, votes, and makes the right percent
function candidateRows(raceNum, totalVotes) {
    var rowHTML = "";
    for (var j = 0; j <= 2; j++) {
        // All of these find the correct value in the tansdementional arrays the first [] is how far down to go and the second [] is how far to the right you need to go to find the right value
        var canidateName = candidate[raceNum][j];
        var canidateParty = party[raceNum][j];
        var canidateVotes = votes[raceNum][j];
        var canidatePercent = calcPercent(canidateVotes, totalVotes);
        // THis adds in more HTMl code using the values found above
        rowHTML += "<tr> <td>" + canidateName + " (" + canidateParty + ")</td> <td>" + canidateVotes.toLocaleString() + "(" + canidatePercent.toFixed(1) + "%) </td>";
        for (var k = 0; k < canidatePercent.toFixed(1); k++) {
            rowHTML += createBar(canidateParty, canidatePercent);
        }
        rowHTML += "</tr> ";
    }
    return rowHTML;
}
/* Callback Function to calculate an array sum */
function calcSum(value) {
    totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
    return (100 * value / sum);
}
// This calls in the percent bars and depending on the party type the color of the bar will be different
function createBar(partyType) {
    var barHTML = "";
    // My first swicth function
    // NOTE TO SELF REMEMBER BREAK;
    switch (partyType) {
        case "D":
            barHTML += "<td class='dem'></td>";
            break;
        case "R":
            barHTML = "<td class='rep'></td>";
            break;
        case "I":
            barHTML = "<td class='ind'></td>";
            break;
    }
    return barHTML;
}