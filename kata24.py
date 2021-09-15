"""
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
"""

#My solution:
import string
def high(x):
    words = x.split(" ")
    scores = []
    score = 0
    for word in words:
        for char in word:
            score += string.ascii_lowercase.index(char)+1
        scores.append(score)
        score = 0

    return words[scores.index(max(scores))]

#Most upvoted solution:
def sol_high(x):
    return max(x.split(), key=lambda k: sum(ord(c) - 96 for c in k))
