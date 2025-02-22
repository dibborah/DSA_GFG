class Solution {
  merge(arr, low, mid, high) {
    const part1 = [];
    const part2 = [];
    for(let i = 0; i < mid + 1; i++) {
      part1[low + i] = arr[low + i];
    };
    for(let i = 0; i < high - mid; i++) {
      part2[i] = arr[mid + i + 1];
    };

    let i = 0;
    let j = 0;
    let k = 0;    
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

    while(i < part1.length) {
        arr[k] = part1[i];
        i++;
        k++;
    }
    while(j < part2.length) {
        arr[k] = part2[j];
        j++;
        k++;
    }
  };
};

const nums = [10, 15, 20, 40, 8, 11, 55];
const low = 0;
const mid = 3;
const high = 6;
const solution = new Solution();
solution.merge(nums, low, mid, high)
console.log(nums);