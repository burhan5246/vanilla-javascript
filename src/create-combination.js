import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>

`;
/* var attributes = [
  ["5efd6f4eab130d037cc65851", "5efb42dc2479e91f9cfbd479", "5efb42dc2479e91f9cfbd47a"],
  ["5efd6f4eab130d037cc65851", "5efd70b9b0abdc1294c1dc2a", "5efd6f4eab130d037cc65853"],  
  ["5efc8f73170d7a20988bfd51", "5efc8f73170d7a20988bfd53"]
]; */
var attributes = [
  ["yellow", "green", "blue"],
  ["1", "2", "3", "4"],
  ["small", "medium", "large"],
  ["100"],
  ["xl", "xxl", "xxxl"]
];

//var attributes = [["yellow", "Black"]];

// Generate cartesian product of given iterables:
/* function* cartesian(head, ...tail) {
  let remainder = tail.length ? cartesian(...tail) : [[]];
  for (let r of remainder) for (let h of head) yield [h, ...r];
}

// Example:
const first = attributes[0];
const second = attributes[1];
const third = attributes[2];

console.log([...cartesian(first, second, third)]); */

function allPossibleCases(arr) {
  if (arr.length === 1) {
    let comb = [];
    for (const i of arr[0]) {
      comb.push(i);
    }

    return comb;
    //return arr[0];
  } else {
    var result = [];
    var allCasesOfRest = allPossibleCases(arr.slice(1)); // recur with the rest of array
    for (var i = 0; i < allCasesOfRest.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        let comb = [];
        comb.push(arr[0][j]);
        if (Array.isArray(allCasesOfRest[i])) {
          for (const k of allCasesOfRest[i]) {
            comb.push(k);
          }
        } else {
          comb.push(allCasesOfRest[i]);
        }
        result.push(comb);
      }
    }
    return result;
  }
}

console.log(allPossibleCases(attributes));
