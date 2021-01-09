document.getElementById("result").disabled = true;
document.getElementById("result2").disabled = true;
document.getElementById("result3").disabled = true;

$('input[id="tri"]').keyup(function(){
    var $input = $(this).val();
    var $input2 = $('input[id="tri2"]').val();
    if($input == "" || $input2 == "")
    {
       $('input[id="result"]').val("");      
    }
    else
    {
    var num = $input * 1;
    var num2 = $input2 * 1;
    result = num * num2 * 1/2;
    $('input[id="result"]').val(result);
    }
});

$('input[id="tri2"]').keyup(function(){
    var $input = $(this).val();
    var $input2 = $('input[id="tri"]').val();
    if($input == "" || $input2 == "")
    {
       $('input[id="result"]').val("");      
    }
    else
    {
    var num = $input * 1;
    var num2 = $input2 * 1;
    result = num * num2 * 1/2;
    $('input[id="result"]').val(result);
    }
});

$('input[id="rect"]').keyup(function(){
    var $input = $(this).val();
    var $input2 = $('input[id="rect2"]').val();
    if($input == "" || $input2 == "")
    {
       $('input[id="result2"]').val("");      
    }
    else
    {
    var num = $input * 1;
    var num2 = $input2 * 1;
    result = num * num2;
    $('input[id="result2"]').val(result);
    }
});

$('input[id="rect2"]').keyup(function(){
    var $input = $(this).val();
    var $input2 = $('input[id="rect"]').val();
    if($input == "" || $input2 == "")
    {
       $('input[id="result2"]').val("");      
    }
    else
    {
    var num = $input * 1;
    var num2 = $input2 * 1;
    result = num * num2;
    $('input[id="result2"]').val(result);
    }
});

$('input[id="cir"]').keyup(function(){
    var $input = $(this).val();
    if($input == "")
    {
       $('input[id="result3"]').val("");      
    }
    else
    {
    var num = $input;
    result = num * num * Math.PI;
    $('input[id="result3"]').val(result);
    }
});


function conversion(evt, conversiontype) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(conversiontype).style.display = "block";
  evt.currentTarget.className += " active";
    
document.getElementById("result").disabled = true;
document.getElementById("result2").disabled = true;
document.getElementById("result3").disabled = true;
$('input[class="display"]').val("");

}