// Move the first letter of each word to the end of it, then add "ay" to the end
// of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldWay !

function pigIt(str){
    var res = [];
    str =str.split(' ');
    for(var i=0;i<str.length;i++){
      var array = str[i].split('');
      var removed= array.splice(0,1);
      removed =removed.join('');
      array =array.join('');
      array+= removed+ 'ay';
      res.push(array);
    }
      return res.join(' ');
}