function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;   
    var years = document.getElementById("years").value;

    var interest = principal * years * rate / 100.0;

    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML = "If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"

    document.getElementById("principal").focus();
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}


function checkPositiveNumber() 
{
    var amount = document.getElementById("principal").value;
    if (amount <= 0)
    {
    	alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}
        
