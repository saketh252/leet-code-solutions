class Solution(object):
    def containsDuplicate(self, nums):
        hashset= set() # creating a hash set for the solution
        
        for n in nums:  # looping through the entire loop
            if n in hashset:
               return True
            hashset.add(n)
        return False
