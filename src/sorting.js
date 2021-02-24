//bubblesort
//this is min to max
var isTrue = true;
var arrey = [2, 8, 9, 3, 1, 0];
while (isTrue) {
  isTrue = false;
  for (let j = 0; j < arrey.length - 1; j++) {
    //change > to < & get max to min
    if (arrey[j] < arrey[j + 1]) {
      let min = arrey[j];
      let max = arrey[j + 1];
      arrey[j] = max;
      arrey[j + 1] = min;
      isTrue = true;
    }
  }
}

console.log(arrey);
