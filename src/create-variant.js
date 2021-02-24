import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>

`;

var attributes = [
  ["yellow", "green", "blue"],
  ["small", "medium", "large"],
  ["1", "2", "3", "4"]
];

//console.log(attributes);

var $all = [];
var $group = [];
function generate_combinations(
  $data = [],
  $all = [],
  $group = [],
  $value = null,
  $i = 0
) {
  var $keys = $data.keys();

  var keys = [];
  for (let x of $keys) {
    keys.push(x);
  }
  //console.log(keys);
  if ($value && $value !== null) {
    console.log($value);
    $group.push($value);
  }

  if ($i >= $data.length) {
    console.log("here");
    $all.push($group);
  } else {
    var $currentKey = keys[$i];
    var $currentElement = $data[$currentKey];

    $currentElement.forEach($val => {
      generate_combinations($data, $all, $group, $val, $i + 1);
    });
  }

  return $all;
}

var $combos = generate_combinations(attributes, $all, $group);

console.log($combos);
