/* Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/

//My solution:
function validParentheses(parens){
  
    let brackets = {'(':')'}
    let stack = []
    
    for(let char of parens){
      if(brackets[char]){stack.push(brackets[char])}
      else if(stack.pop() !== char){return false}
    }
    return(!stack.length)
}

//Most upvoted solution:
function sol_validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
  }