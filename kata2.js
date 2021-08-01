/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

// My solution: 

function digital_root(n) {
    let curr_sum =  sum_digits(get_digit_list(n))
    while(get_digit_list(curr_sum).length > 1){
      curr_sum = sum_digits(get_digit_list(curr_sum));
    }
    
    return curr_sum;
  }
    
function get_digit_list(n){
    return String(n).split("").map(x=>Number(x)) 
}

function update_curr_sum(n){
    return sum_digits(get_digit_list(n));
    
}
function sum_digits(numbers){
    return numbers.reduce((a, b) => a + b, 0)
}


// Best solution:

function digital_root(n) {
    return (n - 1) % 9 + 1;
  }