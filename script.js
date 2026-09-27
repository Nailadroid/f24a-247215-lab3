let nums = [2, 1, 5];

function total(arr) {
  let s = 0;
  for (let i = 0; i < arr.length; i = i + 1) {
    s = s + arr[i];
  }
  return s;
}
console.log(total(nums));