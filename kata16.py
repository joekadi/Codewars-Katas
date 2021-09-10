"""
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
"""

#My solution:
def validBraces(string):
    
    bracket_map = {'(': ')', '{':'}', '[':']'}
    stack = []
    
    for char in string:
        if char in bracket_map.keys():
            stack.append(char)
        elif len(stack) == 0 or char != bracket_map[stack.pop()]:
            return False
        
    return len(stack) == 0

#Most upvoted solution
def sol_validBraces(string):
    braces = {"(": ")", "[": "]", "{": "}"}
    stack = []
    for character in string:
        if character in braces.keys():
            stack.append(character)
        else:
            if len(stack) == 0 or braces[stack.pop()] != character:
                return False
    return len(stack) == 0  