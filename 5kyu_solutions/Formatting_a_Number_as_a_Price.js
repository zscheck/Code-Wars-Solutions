// Your objective is to add formatting to a plain number to display it as price.

// The function should return a string like this:

// var price = numberToPrice(13253.5123); console.log(price); // 13,253.51
// Numbers should use the standard comma for every 3 numbers and dot to separate
// the cents, cents need to be truncated to 2 decimals, in the case that the
// decimal part of the number is 1 character long or none you should add 0's so
// that the result will always have 2 decimal characters, the function will also
// evaluate negative numbers.

// function should return a string 'NaN' if the input is not a valid number


var numberToPrice = function(n) {
    if(isNaN(n))return 'NaN';

    var change= Math.trunc(((Math.abs(n)%1)*100)+.05);
    change=change.toString();
    if(change.length==1)change='0'+change;

    n=Math.trunc(n);
    var res='';

    while(Math.abs(n)>999){
        var a=n%1000;
        n=Math.trunc(n/1000);
        var b=a.toString();
        if(b.length == 1){
            b='00'+b;
        }
        if(b.length == 2){
            b='0'+b;
        }
        res=','+b+res;
    }
    var num= n.toString();
    if((num + res+ '.'+change)=='0.00')return 'NaN';

    return num + res+ '.'+change;
}