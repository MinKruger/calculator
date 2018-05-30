function calculate()
    {
        var investment = document.getElementById("investment").value;
        var annualRate = document.getElementById("annualRate").value;
        var monthlyRate = annualRate / 12 / 100;
        var years = document.getElementById("years").value;
        var months = years * 12;
        var result = 0;
      
        for ( i = 1; i <= months; i++ ) {
            result = (result + investment) * (1 + monthlyRate);
        }

        var htmlResult = "<p> The total amount is $" + result.toFixed(2) + "<p>";

        document.getElementById("result").innerHTML = htmlResult;
    }