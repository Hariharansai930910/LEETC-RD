// Topics data
const topics = [
  { id: 'arrays', name: 'Arrays and Hashing' },
  { id: 'twopointers', name: 'Two Pointers' },
  { id: 'stack', name: 'Stack' },
  { id: 'binarysearch', name: 'Binary Search' },
  { id: 'slidingwindow', name: 'Sliding Window' },
  { id: 'linkedlist', name: 'Linked List' },
  { id: 'trees', name: 'Trees' },
  { id: 'tries', name: 'Tries' },
  { id: 'backtracking', name: 'Backtracking' },
  { id: 'heap', name: 'Heap/Priority Queue' },
  { id: 'intervals', name: 'Intervals' },
  { id: 'greedy', name: 'Greedy' },
  { id: 'advancedgraphs', name: 'Advanced Graphs' },
  { id: 'graphs', name: 'Graphs' },
  { id: 'dp1d', name: '1-D Dynamic Programming' },
  { id: 'dp2d', name: '2-D Dynamic Programming' },
  { id: 'bitmanipulation', name: 'Bit Manipulation' },
  { id: 'mathgeometry', name: 'Math & Geometry' },
];

// Problems data
const problems = {
  arrays: [
    {
      title: 'Contains Duplicate',
      difficulty: 'Easy',
      question: 'Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.\n\nExample 1:\nInput: nums = [1, 2, 3, 3]\nOutput: true',
      hint: 'Think about using a data structure that allows for O(1) lookups.',
      oneLiner: 'Use a set to check if any element repeats.',
      threeLiner: 'We go through each number.\nWe keep a list of ones we\'ve already seen.\nIf a number shows up again, we know it\'s a duplicate.',
      mnemonic: '"Seen before?" → if num in seen: return True\n"Add new" → seen.add(num)\n"End clean" → return False',
      code: `class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False

# Time Complexity: O(n)
# Space Complexity: O(n)`
    },
    // Add more array problems here
  ],
  
  twopointers: [
    {
      title: 'Valid Palindrome',
      difficulty: 'Easy',
      question: 'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.',
      hint: 'Use two pointers: one starting from the beginning and one from the end.',
      oneLiner: 'Use two pointers from both ends, skipping non-alphanumerics and comparing characters.',
      threeLiner: 'We look at one letter from the front and one from the back.\nWe skip anything that\'s not a letter or number.\nIf everything matches going inward, it\'s a palindrome!',
      mnemonic: '"Skip non-letters" → if not s[l].isalnum(): l += 1\n"Lowercase compare" → if s[l].lower() != s[r].lower(): return False\n"Move pointers" → l += 1, r -= 1',
      code: `def isPalindrome(s: str) -> bool:
    left, right = 0, len(s) - 1
    
    while left < right:
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
            
        if s[left].lower() != s[right].lower():
            return False
        
        left += 1
        right -= 1
    
    return True

# Time Complexity: O(N)
# Space Complexity: O(1)`
    },
    // Add more two pointers problems here
  ],
  
  // Include additional problem categories here following the same pattern
};