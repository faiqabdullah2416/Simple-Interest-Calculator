function selectFunction(){     
    for(x=1;x<200;x++){
    var option = "<option value='" + x + "'>" + x + "</option>"
    document.getElementById('years').innerHTML += option;   
    } 
} 
function interestRateValue(){
    var rate= document.getElementById('points').value;
    document.getElementById('rate').innerHTML = rate+"%";
    }
function getInterestRate(){
    return document.getElementById('points').value;
}
function compute()
{
    var amount = document.getElementById("principal").value;
    if(amount){
        var rate = this.getInterestRate();
        var years = document.getElementById("years").value;
        var interestAmount=amount*(rate/100)*years;

        var p=document.getElementById("para");
        document.getElementById("para").innerHTML = "If you deposit " +amount +" at an interest rate of "+rate+". You will receive an amount of "+interestAmount+" in the year "+targetYear()+" "
        console.log(getElementById("para").innerHTML)
        return interestAmount;
    }
    else{
        window.alert("Enter Amount")
    }
}
function targetYear(){
    var d= new Date();
    var targetYear = parseInt(d.getFullYear()) + parseInt(document.getElementById("years").value);
    return targetYear;
}

        