
//My solution:
function narcissistic(value) {
    // Code me to return true or false
    var total = 0;
    value.toString().split('').forEach(num => {
      total += Math.pow(+num, value.toString().split('').length)
    })
    return value == total
}

//Most upvoted solution:
function sol_narcissistic( value ) {
    return ('' + value).split('').reduce(function(p, c){
      return p + Math.pow(c, ('' + value).length)
      }, 0) == value;
  }

