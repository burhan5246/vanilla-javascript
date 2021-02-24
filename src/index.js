import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
var arr = [1, 2, 3, 4];

for (let a of arr) {
  a = a + 1;
}

var test_arr = [
  {
    values: [
      {
        name: "red"
      },
      {
        name: "blue"
      },
      {
        name: "yellow"
      }
    ]
  }
];

/* for (let arr of test_arr) {
  for (let [i, v] of arr.values.entries()) {
    if (v.name === "red") {
      delete arr.values[i];
    }
  }
} */

test_arr.forEach((attr, i) => {
  attr.values.forEach((val, j) => {
    if (val.name === "red") {
      test_arr[i].values.splice(j, 1);
    }
  });
});

console.log(test_arr);
