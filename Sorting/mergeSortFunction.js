
class Solution{
    // Using this approach we are starting the loop from the last index
    // But since we are copying the original array we can now also start
    // looping from the first index
  fun(arr, low, mid, high) {
    const part1 = [];
    for(let i = low; i < mid + 1; i++) {
        part1[i] = arr[i];
    };
    const part2 = [];

    let p = 0;
    for(let i = mid + 1; i < high + 1; i++) {
        part2[p] = arr[i];
        p++;
    };

    let i = part1.length - 1;
    let j = part2.length - 1;
    let k = arr.length - 1;
    while(i >= 0 && j >= 0) {
        if(part1[i] > part2[j]) {
            arr[k] = part1[i];
            i--;
        } else {
            arr[k] = part2[j];
            j--;
        }
        k--;
    };
    while(i >= 0) {
        arr[k] = part1[i];
        i--;
        k--;
    }
    while(j >= 0) {
        arr[k] = part2[j];
        j--;
        k--;
    };
  };
};

const nums = [10, 15, 20, 40, 8, 11, 55];
            //  [8, 10, 11, 15, 20, 40, 55]
const low = 0;
const mid = 3;
const high = 6;
const solution = new Solution();
solution.fun(nums, low, mid, high);
console.log(nums);