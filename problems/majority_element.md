# LeetCode 169. Majority Element

## Problem Statement
Given an array `nums` of size `n`, return the **majority element**.
The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

## Examples

**Example 1:**
```text
Input: nums = [3,2,3]
Output: 3
```

**Example 2:**
```text
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

## Solution

### Moore's Voting Algorithm (Optimal)
We can use [Moore's Voting Algorithm](../algorithms/moores_voting_algo.md) to solve this problem optimally in O(N) time and O(1) space. Since the problem guarantees that a majority element exists, we don't even need the second verification pass.

## Code Implementation (C++)

```cpp
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int count = 0;
        int candidate = 0;

        for (int num : nums) {
            if (count == 0) {
                candidate = num;
            }
            if (num == candidate) {
                count++;
            } else {
                count--;
            }
        }

        return candidate;
    }
};
```
