// Your task in order to complete this Kata is to write a function which formats
// a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just
// returns "now". Otherwise, the duration is expressed as a combination of
// years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

//   formatDuration(62)    // returns "1 minute and 2 seconds"
//   formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc.
// In general, a positive integer and one of the valid units of time, separated
// by a space. The unit of time is used in plural if the integer is greater than
// 1.

// The components are separated by a comma and a space (", "). Except the last
// component, which is separated by " and ", just like it would be written in
// English.

// A more significant units of time will occur before than a least significant
// one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second
// is.

// Different components have different unit of times. So there is not repeated
// units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1
// minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function
// should not return 61 seconds, but 1 minute and 1 second instead. Formally,
// the duration specified by of a component must not be greater than any valid
// more significant unit of time.

// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

function formatDuration (seconds) {
    var y,d,h,m,s;
    var ret = '';
  if(seconds == 0)return 'now';
    var afterYears = seconds%31536000; 
    var years = Math.trunc(seconds/31536000);
    var afterDays = afterYears%86400;
    var days = Math.trunc(afterYears/86400);
    var afterHours = afterDays%3600;
    var hours = Math.trunc(afterDays/3600);
    var remSeconds = afterHours%60;
    var minutes = Math.trunc(afterHours/60);
  if(years == 0) y='';
  if(years == 1) y= years + ' year, ';
  if(years > 1) y= years + ' years, ';
  
  if(days == 0) d='';
  if(days == 1) d= days + ' day, ';
  if(days > 1) d= days + ' days, ';
  
  if(afterHours == 0){
    m='';
    s='';
    if(hours == 0) h='';
    if(hours == 1) h= hours + ' hour';
    if(hours > 1) h= hours + ' hours';
  } else if(minutes == 0 || remSeconds == 0){
    m='';
    s='';
    if(hours == 0) h='';
    if(hours == 1) h= hours + ' hour and ';
    if(hours > 1) h= hours + ' hours and ';  
  } else {
    if(hours == 0) h='';
    if(hours == 1) h= hours + ' hour, ';
    if(hours > 1) h= hours + ' hours, '; 
    }
  
  if(remSeconds === 0){
    s='';
    if(minutes == 0) m='';
    if(minutes == 1) m= minutes + ' minute';
    if(minutes > 1) m= minutes + ' minutes';
  } else{
    if(minutes == 0) m='';
    if(minutes == 1) m= minutes + ' minute and ';
    if(minutes > 1) m= minutes + ' minutes and ';
    if(remSeconds == 1) s= remSeconds + ' second';
    if(remSeconds > 1) s= remSeconds + ' seconds';
  }
  return y + d + h + m + s;
}