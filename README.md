# CodingChallenge08282023
Revature Project Onboarding Coding Challenge 08282023

Weekly Coding Challenges

Java:
CodingChallenge08282023/src/main/java/com/revature/CodingChallenge.java

Given an array of integers, return the largest gap between the sorted elements of the array.

For example, consider the array:
[9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5]... in which, after sorting, the array becomes:
<code>[0, 0, 4, 5, 5, 6, 9, 20, 25, 26, 26]</code>... so that we now see that the largest gap in the array is between 9 and 20 which is 11.

Examples
largestGap([9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5]) ➞ 11
// After sorting: [0, 0, 4, 5, 5, 6, 9, 20, 25, 26, 26]
// Largest gap between 9 and 20 is 11

largestGap([14, 13, 7, 1, 4, 12, 3, 7, 7, 12, 11, 5, 7]) ➞ 4
// After sorting: [1, 3, 4, 5, 7, 7, 7, 7, 11, 12, 12, 13, 14]
// Largest gap between 7 and 11 is 4

largestGap([13, 3, 8, 5, 5, 2, 13, 6, 14, 2, 11, 4, 10, 8, 1, 9]) ➞ 2
// After sorting: [1, 2, 2, 3, 4, 5, 5, 6, 8, 8, 9, 10, 11, 13, 13, 14]
// Largest gap between 6 and 8 is 2

JavaScript:
CodingChallenge08282023/javascript/CodingChallenge.js

Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

Examples
<code>oddishOrEvenish(43) ➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1
oddishOrEvenish(373) ➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1
oddishOrEvenish(4433) ➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0

</code>Python:
CodingChallenge08282023/python/coding_challenge.py

Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.

Use the following formulas:

	
Perimeter of a square: 4 side.
	
Perimeter of a circle: 6.28 radius.


The catch is you can only use arithmetic or comparison operators, which means:


	
No if... else statements.
	
No dictionaries.
	
No lambdas.
	
No formatting methods, etc.


The goal is to write a short, branch-free piece of code.

Examples
<code>perimeter("s", 7) ➞ 28
perimeter("c", 4) ➞ 25.12
perimeter("c", 9) ➞ 56.52

</code>Notes


	
No rounding is needed.
	
Hint: The Boolean True, used with arithmetic operators, counts as 1, while False counts as 0. That means (a>b)+1 will return 1 or 2, depending on the values of a and b.


