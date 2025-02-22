class Solution {
  merge(arr, low, mid, high) {
    const n1 = mid - low + 1;// Try to understand this some day
    const n2 = high - mid;
    const part1 = [];
    const part2 = [];

    for(let i = 0; i < n1; i++) { // mid - low + 1 is crucial ... vs mid + 1
      part1[i] = arr[low + i];
    };
    for(let i = 0; i < n2; i++) {
      part2[i] = arr[mid + i + 1];
    };

    let i = 0;
    let j = 0;
    let k = low; // k = low is also  crucial vs k = 0
    while(i < part1.length && j < part2.length) {
        if(part1[i] < part2[j]) {
            arr[k] = part1[i];
            i++;
        } else {
            arr[k] = part2[j];
            j++;
        };
        k++;
    };

    while(i <  part1.length) {
        arr[k] = part1[i];
        i++;
        k++;
    };
    while(j < part2.length) {
        arr[k] = part2[j];
        j++;
        k++;
    };
  };
  mergeSorting(arr, left, right) {
    if(right > left) {
        // Remember when using JS use Math.floor to get round off values
        // Since js return decimal values/accurate values and so if using decimal inputs as indexes in an array while return undefined
        // As decimal indexes are not possible in JS.
        // So when divides indexes always use Math.floor to round off values
        const mid = Math.floor(left + ((right - left) / 2));
        this.mergeSorting(arr, left, mid);    
        this.mergeSorting(arr, mid + 1, right);
        this.merge(arr, left, mid, right);
    };
  };
};

// merge function
// const nums = [10, 15, 20, 40, 8, 11, 55];
// const low = 0;
// const mid = 3;
// const high = 6;
// solution.merge(nums, low, mid, high)

// merge Sorting algoritm
const nums = [10, 5, 30, 15, 7];
const solution = new Solution();
console.log('b/4 sorting', nums);
solution.mergeSorting(nums, 0, 4);
console.log('a/f sorting', nums);