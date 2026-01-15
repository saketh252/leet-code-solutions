class Solution(object):
    def threeSum(self, nums):
        
  
        res = []
        nums.sort()

        for i, a in enumerate(nums):
            if i > 0 and a == nums[i - 1]:
                continue

            l = i + 1
            r = len(nums) - 1

            while l < r:
                threesum = a + nums[l] + nums[r]

                if threesum > 0:
                    r -= 1
                elif threesum < 0:
                    l += 1
                else:
                    res.append((a, nums[l], nums[r]))
                    l += 1

                    # skip duplicates ONLY after finding a valid triplet
                    while l < r and nums[l] == nums[l - 1]:
                        l += 1

        return res
