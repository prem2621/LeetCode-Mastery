// What is the Two Pointers Pattern?
// The Two Pointers technique involves using two indices (pointers) to iterate over a data structure
// (usually an array or a string) to solve problems efficiently by avoiding nested loops.


  
// When to Use Two Pointers?
// When you need to find pairs, triplets, or subarrays meeting certain conditions.
// When the data is sorted or can be sorted.
// When you want to optimize brute force solutions that use nested loops (O(n2)) to linear or
// near-linear time (O(n)).


  
// How It Works?
// You maintain two pointers that move through the data structure according to certain rules:
// One pointer starts at the beginning, the other at the end (common in problems like
// finding pairs with a sum).
// Or, both pointers start at the beginning, with one moving faster than the other (useful for
// sliding window problems).
// Move pointers towards each other or forward depending on the problem condition.


  
// Typical Approach:
// Initialize two pointers, left and right.
// Check condition based on the current pointers.
// Move pointers accordingly:
// If condition not met, move left or right pointer to try to satisfy the condition.
// If condition met, record the answer or move pointers to find more solutions.
// Repeat until pointers cross or reach the end.



-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


🟦 LeetCode 1) Two Sum


🧠 Intuition

The problem gives:
An array nums
A target value
We need to return the indices of two numbers such that:
nums[i] + nums[j] = target
We must return the indices, not the values.



🟥 Approach 1: Brute Force Idea 🚨

Check every possible pair in the array.
Use two nested loops:
    Outer loop → pick first number
    Inner loop → check every other number after it
    If sum equals target → return indices





⏱ Complexity 📊

Time Complexity: O(n²)
Because we check all pairs.

Space Complexity: O(1)
No extra space used.





  
📝 Dry Run

Input:
nums = [2, 7, 11, 15]
target = 9


Step-by-step:

i = 0 → nums[0] = 2
  j = 1 → 2 + 7 = 9 ✅
    Return [0, 1]



💻 JavaScript (Brute Force)  

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};




🟢 Approach 2: Optimal (Using Hash Map) 🚀
💡 Idea

Instead of checking every pair:
For each number:
Calculate the complement
complement = target - nums[i]


Check if complement already exists in a hash map.

If yes → return indices.

If no → store current number and index in map.

We are trading space to reduce time.

⏱ Complexity 📊

Time Complexity: O(n)
Single pass through array.

Space Complexity: O(n)
Because we store elements in a map.

📝 Dry Run

Input:

nums = [2, 7, 11, 15]
target = 9


Start with empty map {}

i = 0
nums[0] = 2
complement = 9 - 2 = 7
Is 7 in map? ❌
Store: {2: 0}

i = 1
nums[1] = 7
complement = 9 - 7 = 2
Is 2 in map? ✅

Return [0, 1]

💻 JavaScript (Optimal)
var twoSum = function(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }
};

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Leetcode 26) Remove Duplicates from Sorted Array


Intuition 🧠
The problem requires removing duplicates from a sorted array in-place and returning the length of the array with unique elements. 
My initial thought is to use a two-pointer technique: one pointer (index) tracks the position for the next unique value, while the other pointer (i) iterates through the array.


  
Approach 🚀

Two-pointer Technique:
Use index to place unique elements in their correct position.
Traverse the array using i, comparing each element to the previous one.
If the current element differs from the previous, copy it to the index position and increment index.
  
Return:
Return index as the length of the modified array with unique elements.
  
Complexity 📊
Time Complexity:
O(n), where n is the length of the array, as we only traverse the array once.

Space Complexity:
O(1), as we modify the array in-place without using extra space.


  

Dry Run 📝
Input: nums = [1, 1, 2, 2, 3, 4, 4]

1. Start with index = 1.

2. Compare each element with the previous one:

i = 1: nums[1] == nums[0] → Skip.
i = 2: nums[2] != nums[1] → Update nums[index] = nums[2], increment index.
Array: [1, 2, 2, 2, 3, 4, 4], index = 2.
i = 3: nums[3] == nums[2] → Skip.
i = 4: nums[4] != nums[3] → Update nums[index] = nums[4], increment index.
Array: [1, 2, 3, 2, 3, 4, 4], index = 3.
i = 5: nums[5] != nums[4] → Update nums[index] = nums[5], increment index.
Array: [1, 2, 3, 4, 3, 4, 4], index = 4.
i = 6: nums[6] == nums[5] → Skip.
  
3. Result: index = 4, unique elements: [1, 2, 3, 4]




💻 JavaScript

var removeDuplicates = function(nums) {
    let index = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
};


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------








