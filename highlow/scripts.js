console.log('Script is linked.')
$(document).ready(function(){

$('button').click(function(){
var input= $("input").val();
input=parseInt(input)
var number= 5;
 $('body').append(input);
 if(number===input){
    $('body').append('  ,thats correct') 
 }else if(number>input){
    $('body').append('  ,its too low') 
 }
 
 else{
   $('body').append('    ,it too high')  
 }
 
 
 
});
});