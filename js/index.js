function myFunction() {
  function day (cc,yy,mm,dd){
return ((((cc/4)-2*cc-1)+((5*yy/4)) + ((26*(mm+1)/10)) + dd)%7)+1
}
var cc = parseInt(prompt("Enter the century"));
var yy = parseInt(prompt("Enter the year"));
var mm = parseInt(prompt("Enter the month"));
var dd = parseInt(prompt("Enter the date of birth"));
var gender= prompt("your gender")
var result=day(cc,yy,mm,dd).toFixed();
