function verify_card_1(field , autoMove){
    if(field.value.length >= field.maxLength){
        document.getElementById(autoMove).focus();
   } else {
    document.getElementById("display_list").style.display = "none";

   }
   
}

function onload(){
    document.getElementById("display_list").style.display = "none";
}

function showDeatils(){
    var text1 = document.getElementById("card-field1").value;
    var text2 = document.getElementById("card-field2").value;
    var text3 = document.getElementById("card-field3").value;
    var text4 = document.getElementById("card-field4").value;
    
    document.getElementById("list_Data").innerHTML="Card Number Is:" +text1 + " " + text2 + " " +text3 + " " + text4;
    document.getElementById("display_list").style.display = "block";


}