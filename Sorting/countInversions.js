// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */


// Using the brute force approach
// class Solution {
//     inversionCount(arr) {
//       let count = 0;
//       for(let i = 0; i < arr.length - 1; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//           if(arr[i] > arr[j]) {
//             count++;
//           };
//         };
//       };
//       return count;
//     };
//   };

// resumeWordIt ATS score

class Solution {
  countAndMerge(arr, low, mid, high) {
    const n1 = mid - low + 1;
    const n2 = high - mid;
    const part1 = [];
    const part2 = [];

    for(let i = 0; i < n1; i++) {
      part1[i] = arr[low + i];
    };
    for(let i = 0; i < n2; i++) {
      part2[i] = arr[mid + i + 1];
    };

    let i = 0;
    let j = 0;
    let k = low;
    let result = 0;
    while(i < part1.length && j < part2.length) {
        if(part1[i] <= part2[j]) {
            arr[k] = part1[i];
            i++;
        } else {
            arr[k] = part2[j];
            j++;
            result = result + (n1 - i);
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
    return result;
  };
  countInversions(arr, left, right) {
    let count = 0;
    if(right > left) {
      const mid = Math.floor(left + ((right - left) / 2));
      count += this.countInversions(arr, left, mid);
      count += this.countInversions(arr, mid + 1, right);
      count += this.countAndMerge(arr, left, mid, right);
    };
    return count;
  };
  fun(arr) {
    return this.countInversions(arr, 0, arr.length - 1);
  };
};

// const nums = [2, 4, 1, 3, 5];
// const nums = [2, 3, 4, 5, 6];
// const nums = [10, 10, 10]

const solution = new Solution();
console.log(solution.fun(nums));
