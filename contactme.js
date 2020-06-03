$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});
function validateform(){
var query =document.myform.query.value;
var flag1 = 0;
var flag2=0;
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myform.email.value))
{
  alert("Email is Correct.");
  flag1=1;
}
if (query==null || query==""){
  alert("Query can't be blank");
}
else{
  flag2=1;
  alert("Query is OK.")
}
if(flag1==1 && flag2==1){
  alert("You are good to go");
}
else if(flag1==0 && flag2==1){
  alert("Invalid email given.");

}
else if(flag1==0 && flag2==0){
  alert("Invalid Details Given");
  alert("Pls re-enter your details.");

}
document.getElementById('myform').reset();
}
