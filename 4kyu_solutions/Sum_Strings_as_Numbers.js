// Given the string representations of two integers, return the string
// representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3' A string representation of an integer will
// contain no characters besides the ten numerals "0" to "9".


function sumStrings(a,b) { 
    var stra = a.split('');
    var strb = b.split('');
    var res='';
    var add=0;
    var difference = Math.abs(a.length-b.length);
    if(a.length>b.length){
        for(let i=0;i<difference;i++){
        strb.unshift("0");
        }
    }
    if(a.length<b.length){
        for(let i=0;i<difference;i++){
        stra.unshift("0");
        }
    }
  
    for(let i=stra.length-1;i>0;i--){
      var colTot = parseInt(stra[i])+parseInt(strb[i])+add;
      var input = colTot%10;
      add = Math.trunc(colTot/10);
      res= input+res
    }  
    colTot= parseInt(stra[0])+parseInt(strb[0])+add;
    res= colTot +res;
    
    while(res.indexOf('0')==0){
    res=res.slice(1)
    }
    return res;
}