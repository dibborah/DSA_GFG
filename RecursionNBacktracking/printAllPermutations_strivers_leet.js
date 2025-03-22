// Approach I (Little less optimal and can be improved)
// Using Map(To flag as visited)

// TC: O(N!) * O(N)(Looping each time)
// SC: O(N)(temp DS) + O(N) (Map DS) {We are ignoring the space we need for storing our ultimate result answer}
// Auxilliary SC: O(N) (Deepth of the recursion tree)

class Solution1 {
    fun(arr, result, flag, temp) {
        if(temp.length === arr.length) {
            result.push([...temp]);
            return;
        };

        for(let i = 0; i < arr.length; i++) {
            if(!flag[i]) {
                flag[i] = true;
                temp.push(arr[i])
                this.fun(arr, result, flag, temp)
                flag[i] = false;
                temp.pop();
            }
        }
    }

    permutation(arr) {
        const result = [];
        this.fun(arr, result, [], [])
        return result;
    }
}

const solution1 = new Solution1();
const nums1 = [1,2,3];
console.log(solution1.permutation(nums1));


// Approach II

// TC: O(N!) {No. of permutations} * O(N){inner loop that we are running}
// Total TC: O(N * N!)
// The algo will take N time whenever an answer gets entered in the Data Structure
// SC: O(1) {Not considering the result array O(N!)}
// Aux Deepth SC: O(N)

// This is the Approach II
// This approach saves a lot of extra space than approach I
// No extra space apart from the Aux recursion deepth O(N) and result array O(N!)

class Solution2 {
    swap(arr, i, j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    };
  
    fun(arr, k, n, result) {
      if (k === n) {
          result.push([...arr]);
          return;
      };
  
      for (let i = k; i < n; i++) {
          this.swap(arr, k, i);
          this.fun(arr, k + 1, n, result);
          this.swap(arr, k, i);
      };
    };
  
    permutations (arr) {
      const result = [];
      this.fun(arr, 0, arr.length, result);
      return result;
    };
  };
  
const solution2 = new Solution2();
const nums2 = [1,2,3];
console.log(solution2.permutations(nums2));
