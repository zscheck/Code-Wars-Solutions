// General Patron is faced with a problem , his intelligence has intercepted
// some secret messages from the enemy but they are all encrypted. Those
// messages are crucial to getting the jump on the enemy and winning the war.
// Luckily intelligence also captured an encoding device as well. However even
// the smartest programmers weren't able to crack it though. So the general is
// asking you , his most odd but brilliant programmer.

// You can call the encoder like this.

// console.log (device.encode ('What the hell')) ;
// Our cryptoanalysts kept poking at it and found some interesting patterns.

// console.log (device.encode ('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')) ;
// console.log (device.encode ('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')) ;  
// console.log (device.encode ('!@#$%^&*()_+-')) ;
// console.log ('abcdefghijklmnopqrstuvwxyz') ;
// console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
//   return device.encode (a) ;
// }).join ('')) ;
// console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
//   return device.encode ('_'+a)[1] ;
// }).join ('')) ;
// console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
//   return device.encode ('__'+a)[2] ;
// }).join ('')) ;

// We think if you keep on this trail you should be able to crack the code! You
// are expected to fill in the function.

// device.decode
// Good luck ! General Patron is counting on you!

device.decode = function (w) {
    const origCC = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,? ';
    let messageLength = w.length;
    let answer = '';
      for(let i=1;i<=messageLength; i++){
        let indexStr = '';
        let alphTrack = 0;
        let interval = Math.pow(2, i);

        for(let j=1;j<67;j++){
          alphTrack += interval%67;
          if(alphTrack>67) {
            alphTrack -=67;
          }
          indexStr += origCC[alphTrack-1];
        }

        if(w[i-1].match(/[!@#$%^&*()_+-]/)){
          answer += w[i-1];
        } else {
        answer += origCC[indexStr.indexOf(w[i-1])];
        }

    }
    
    return answer ; 
}