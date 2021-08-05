/* This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three())); */

// My solution:

function zero(func) {return func ? func(0) : 0 }
function one(func)  {return func ? func(1) : 1}
function two(func)  {return func ? func(2) : 2}
function three(func) {return func ? func(3) : 3}
function four(func) {return func ? func(4) : 4}
function five(func) {return func ? func(5) : 5}
function six(func) {return func ? func(6) : 6}
function seven(func) {return func ? func(7) : 7}
function eight(func) {return func ? func(8) : 8}
function nine(func) {return func ? func(9) : 9}

function plus(b) {return a => Math.floor(a + b)}
function minus(b) {return a => Math.floor(a - b)}
function times(b) {return a => Math.floor(a * b)}
function dividedBy(b) {return a => Math.floor(a / b)}


// Most upvoted solution:

var n = function(digit) {
    return function(op) {
      return op ? op(digit) : digit;
    }
  };

var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }

