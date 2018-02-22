// This is the first part. You can solve the second part here when you are done
// with this. Multiply two numbers! Simple!

// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid
// Note: 100 randomly generated tests!

function multiply(a, b){
    if(a=='0'||b=='0'){
      return '0';
    }
      a = a.toString();  
      b = b.toString();  
    
      let carry = 0;  
      let ret = '';  
    
      let di = 0;  
      let dj = 0;  
      let under = '';  
      for (let i = a.length - 1 ;i >= 0;i--) {  
        let tmp = '';  
        let di = parseInt(a[i]) ;  
        for (let j = b.length - 1;j >= 0;j--) {  
          let dj = parseInt(b[j]);  
          let r = di * dj + carry;  
    
          if (r >= 10) {  
            carry = (r / 10) | 0;  
            tmp = (r % 10) + tmp;  
          } else {  
            carry = 0;  
            tmp = r + tmp;  
          }  
        }  
    
        if (carry > 0) {  
          tmp = carry.toString() + tmp;  
          carry = 0;  
        }  
    
        if (i < a.length - 1){  
          ret = addLarge (ret, tmp + under);  
        } else {  
          ret = tmp;  
        }  
        under += '0';  
      }
      while(ret.indexOf('0')==0){
      ret=ret.slice(1)
      }
      return ret;
}
    
function addLarge(a, b){  
    let carry = 0;  
    let ret = '';  
    a = a.toString();  
    b = b.toString();  

    let len = Math.min(a.length, b.length);  
    let sla = a.substr(a.length - len, a.length );  
    let slb = b.substr(b.length - len, b.length );  

    for (let i = len;i > 0; i--) {  
        let di = parseInt(sla[i-1]);  
        let dj = parseInt(slb[i-1]);  
        ret = (carry + di + dj) >= 10 ? ((carry + di + dj) - 10 + ret) : ((carry + di + dj) + ret);  
        carry = ((carry + di + dj) /10 ) | 0;  
    }  

    if (a.length != b.length) {  
        if (a.length > b.length) {  
            ret = addLarge(a.substr(0, a.length - len), carry.toString()) + ret;  
        } else {  
            ret = addLarge(b.substr(0, b.length - len), carry.toString()) + ret;  
        }  
    return ret;  
    } else {  
        if (carry> 0) {  
            ret = carry + ret; 
        }  
    return ret.toString();  
    }  
};
    
    
String.prototype.shift = String.prototype.shift || function() {
    var x = this.split("");
    x.shift();
    return x.join("");
};