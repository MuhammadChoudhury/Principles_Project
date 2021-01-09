document.getElementById("result").disabled = true;
document.getElementById("result2").disabled = true;
document.getElementById("result3").disabled = true;
document.getElementById("result4").disabled = true;

$('select[class=choice1]').change(function() {
    $('input[class="display"]').val('')
}); 

$('select[class=choice2]').change(function() {
    $('input[class="display"]').val('')
});

$('input[id="input"]').keyup(function(){
    var $input = $(this).val();
    if($input == "")
    {
       $('input[id="result"]').val("");      
    }
    else
    {
    var num = $input * 1;
    var x = document.getElementById("temp1").value;
    var y = document.getElementById("temp2").value;
    if( x == "choice1" && y == "option1")
        {
            result = num;
            $('input[id="result"]').val(result);
        }
    else if( x == "choice1" && y == "option2")
        {
            result = ((num - 32) / 1.8);
            $('input[id="result"]').val(result);
            
        }
    else if( x == "choice1" && y == "option3")
        {
            result = ((num + 459.67)* 5 / 9);
            $('input[id="result"]').val(result);
        }
    else if( x == "choice2" && y == "option1")
        {
             result = (1.8 * num + 32);
            $('input[id="result"]').val(result);
        }
    else if( x == "choice2" && y == "option2")
        {
            result = num;
            $('input[id="result"]').val(result);
        }
    else if( x == "choice2" && y == "option3")
        {
            result = (num + 273.15);
            $('input[id="result"]').val(result);
        }
    else if( x == "choice3" && y == "option1")
        {
             result = (num * 9/5) -459.67;
            $('input[id="result"]').val(result);
        }
    else if( x == "choice3" && y == "option2")
        {
            result = (num - 273.15);
            $('input[id="result"]').val(result);
        }
    else if( x == "choice3" && y == "option3")
        {
            result = num;
            $('input[id="result"]').val(result);
        }
    }
});

$('input[id="input2"]').keyup(function(){
    var $input = $(this).val();
    if($input == "")
    {
       $('input[id="result2"]').val("");      
    }
    else
    {
    var num = $input * 1;
    if(num < 0)
        {
            alert("Enter a positive number");
        }
    else
    {
        
    
    var x = document.getElementById("length1").value;
    var y = document.getElementById("length2").value;
    if( x == "choice1" && y == "option1")
        {
            result = num;
            $('input[id="result2"]').val(result);
        }
    else if( x == "choice1" && y == "option2")
        {
            result = num * 1000;
            $('input[id="result2"]').val(result);
            
        }
    else if( x == "choice1" && y == "option3")
        {
            result = num * 1000000;
            $('input[id="result2"]').val(result);
        }
    else if( x == "choice2" && y == "option1")
        {
             result = num / 1000;
            $('input[id="result2"]').val(result);
        }
    else if( x == "choice2" && y == "option2")
        {
            result = num;
            $('input[id="result2"]').val(result);
        }
    else if( x == "choice2" && y == "option3")
        {
            result = num * 1000;
            $('input[id="result2"]').val(result);
        }
    else if( x == "choice3" && y == "option1")
        {
             result = num / 1000000;
            $('input[id="result2"]').val(result);
        }
    else if( x == "choice3" && y == "option2")
        {
            result = num / 1000;
            $('input[id="result2"]').val(result);
        }
    else if( x == "choice3" && y == "option3")
        {
            result = num;
            $('input[id="result2"]').val(result);
        }
    }
    }
});

$('input[id="input3"]').keyup(function(){
    var $input = $(this).val();
    if($input == "")
    {
       $('input[id="result3"]').val("");      
    }
    else
    {
    var num = $input * 1;
    if(num < 0)
        {
            alert("Enter a positive number");
        }
    else
    {
        
    
    var x = document.getElementById("time1").value;
    var y = document.getElementById("time2").value;
    if( x == "choice1" && y == "option1")
        {
            result = num;
            $('input[id="result3"]').val(result);
        }
    else if( x == "choice1" && y == "option2")
        {
            result = 60 * num;
            $('input[id="result3"]').val(result);
            
        }
    else if( x == "choice1" && y == "option3")
        {
            result = 3600 * num;
            $('input[id="result3"]').val(result);
        }
    else if( x == "choice2" && y == "option1")
        {
             result = num / 60;
            $('input[id="result3"]').val(result);
        }
    else if( x == "choice2" && y == "option2")
        {
            result = num;
            $('input[id="result3"]').val(result);
        }
    else if( x == "choice2" && y == "option3")
        {
            result = num * 60;
            $('input[id="result3"]').val(result);
        }
    else if( x == "choice3" && y == "option1")
        {
             result = num / 3600;
            $('input[id="result3"]').val(result);
        }
    else if( x == "choice3" && y == "option2")
        {
            result = num / 60;
            $('input[id="result3"]').val(result);
        }
    else if( x == "choice3" && y == "option3")
        {
            result = num;
            $('input[id="result3"]').val(result);
        }
    }
    }
});

$('input[id="input4"]').keyup(function(){
    var $input = $(this).val();
    if($input == "")
    {
       $('input[id="result4"]').val("");      
    }
    else
    {
    var num = $input * 1;
    if(num < 0)
        {
            alert("Enter a positive number");
        }
    else
    {
        
    
    var x = document.getElementById("mass1").value;
    var y = document.getElementById("mass2").value;
    if( x == "choice1" && y == "option1")
        {
            result = num;
            $('input[id="result4"]').val(result);
        }
    else if( x == "choice1" && y == "option2")
        {
            result = num * 1000;
            $('input[id="result4"]').val(result);
            
        }
    else if( x == "choice1" && y == "option3")
        {
            result = num * 1000000;
            $('input[id="result4"]').val(result);
        }
    else if( x == "choice2" && y == "option1")
        {
             result = num / 1000;
            $('input[id="result4"]').val(result);
        }
    else if( x == "choice2" && y == "option2")
        {
            result = num;
            $('input[id="result4"]').val(result);
        }
    else if( x == "choice2" && y == "option3")
        {
            result = num * 1000;
            $('input[id="result4"]').val(result);
        }
    else if( x == "choice3" && y == "option1")
        {
             result = num / 1000000;
            $('input[id="result4"]').val(result);
        }
    else if( x == "choice3" && y == "option2")
        {
            result = num / 1000;
            $('input[id="result4"]').val(result);
        }
    else if( x == "choice3" && y == "option3")
        {
            result = num;
            $('input[id="result4"]').val(result);
        }
    }
    }
});
function conversion(evt, conversiontype) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(conversiontype).style.display = "block";
  evt.currentTarget.className += " active";
    
document.getElementById("result").disabled = true;
document.getElementById("result2").disabled = true;
document.getElementById("result3").disabled = true;
document.getElementById("result4").disabled = true;
$('input[class="display"]').val(''); 
}