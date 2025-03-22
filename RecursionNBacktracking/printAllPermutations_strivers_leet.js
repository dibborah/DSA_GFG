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
const nums = [1,2,3];
console.log(solution1.permutation(nums));