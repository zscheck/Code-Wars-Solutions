// You need to create a function that will validate if given parameters are
// valid geographical coordinates.

// Valid coordinates look like the following: "23.32353342, -32.543534534". The
// return value should be either true or false.

// Latitude (which is first float) can be between 0 and 90, positive or
// negative. Longitude (which is second float) can be between 0 and 180,
// positive or negative.

// Coordinates can only contain digits, or one of the following symbols
// (including space after comma) -, .

// There should be no space between the minus "-" sign and the digit after it.

// Here are some valid coordinates:

// -23, 25
// 24.53525235, 23.45235
// 04, -23.234235
// 43.91343345, 143
// 4, -3

// And some invalid ones:

// 23.234, - 23.4234
// 2342.43536, 34.324236
// N23.43345, E32.6457
// 99.234, 12.324
// 6.325624, 43.34345.345
// 0, 1,2
// 0.342q0832, 1.2324


function isValidCoordinates(coordinates){
    var arr=coordinates.split(' ');
    arr[0]=arr[0].slice(0,-1);

    if(arr.length!=2){return false};
    if(arr[0].includes(',')==true||arr[1].includes(',')==true){return false};
    if(parseFloat(arr[0])>90 || parseFloat(arr[0])<-90){return false};
    if(parseFloat(arr[1])>180 || parseFloat(arr[1])<-180){return false};
    if(arr[0].match(/[a-zA-Z]/i)||arr[1].match(/[a-zA-Z]/i)){return false};
    var a=arr[0].split('.');
    var b=arr[1].split('.');
    if(a.length>2||b.length>2){return false};
    if((arr[0].indexOf('-')!=0&&arr[0].indexOf('-')!=-1)||(arr[1].indexOf('-')!=0&&arr[1].indexOf('-')!=-1)) {
        return false
    };
      return true;
}