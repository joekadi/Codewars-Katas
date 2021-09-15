"""
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

"""

#My solution:
def find_short(s):
    l = len(s.split(" ")[0])
    for word in s.split(" "):
        l = len(word) if len(word) < l else l
    return l # l: shortest word length

#Most upvoted solution:
def sol_find_short(s):
    return min(len(x) for x in s.split())