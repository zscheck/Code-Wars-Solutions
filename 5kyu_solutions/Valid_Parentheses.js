// Write a function called that takes a string of parentheses, and determines if
// the order of the parentheses is valid. The function should return true if the
// string is valid, and false if it's invalid.

// Examples "()"              =>  true ")(()))"          =>  false "("
// =>  false "(())((()())())"  =>  true Constraints 0 <= input.length <= 100

// You may assume that the input string will only contain opening and closing
// parenthesis and will not be an empty string.

function validParentheses(parens){
    var par=parens.split('');
    var lCount=0;
    var rCount=0;
    for(let i=0;i<par.length;i++){
      if(par[i]=='(') lCount++;
      if(par[i]==')') rCount++;
      if(lCount<rCount)return false;
    }
    if(lCount!=rCount)return false;
    return true;
}