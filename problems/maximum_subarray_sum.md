# Maximum Subarray Sum (LeetCode #53)

## 📝 Problem Statement
Given an integer array `nums`, find the subarray (a contiguous part of the array) with the largest sum and return its sum.

**Example:**
- **Input:** `nums = [-2,1,-3,4,-1,2,1,-5,4]`
- **Output:** `6`
- **Explanation:** The subarray `[4,-1,2,1]` has the largest sum = `6`.

---

## 💡 Solution Approach: Kadane's Algorithm
The most efficient way to solve this is using **Kadane's Algorithm**, which solves the problem in a single pass.

### **Code (C++)**

```cpp
#include <iostream>
#include <vector>
#include <climits>
#include <algorithm>

using namespace std;

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int currSum = 0;
        int maxSum = INT_MIN;

        for (int val : nums) {
            currSum += val;
            
            // Update maxSum if we found a better sum
            maxSum = max(maxSum, currSum);
            
            // If the sum becomes negative, it's a "burden" for future elements.
            // So we reset it to zero.
            if (currSum < 0) {
                currSum = 0;
            }
        }
        
        return maxSum;
    }
};

int main() {
    Solution sol;
    vector<int> nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    
    cout << "Maximum Subarray Sum: " << sol.maxSubArray(nums) << endl;
    
    return 0;
}
```

---

## 🔍 Simple Explanation
1.  **Initialize**: We start with `currSum = 0` and `maxSum` as a very small number (`INT_MIN`).
2.  **Iterate**: We walk through every number in the array.
3.  **Accumulate**: We add the current number to `currSum`.
4.  **Pick the Best**: If `currSum` is the biggest we've seen so far, we store it in `maxSum`.
5.  **Reset if Negative**: If `currSum` drops below zero, it means the numbers we've picked so far are doing more harm than good for the future. So, we "forget" everything we've collected and reset `currSum` to `0` to start looking for a fresh subarray.

---

## 📊 Complexity
- **Time**: $O(n)$ — Single pass through the array.
- **Space**: $O(1)$ — No extra space proportional to input.
