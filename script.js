var sin;
var cos;
var tg;


function getInputValues() {

    var input1Value = document.getElementById("input1").value;
    var input2Value = document.getElementById("input2").value;
    var input3Value = document.getElementById("input3").value;
    
     var num1 = parseFloat(input1Value);
     var num2 = parseFloat(input2Value);
     var num3 = parseFloat(input3Value);

    console.log("Input 1:", num1);
    console.log("Input 2:", num2);
    console.log("Input 3:", num3);
    
    sin = num1;
    cos = num2;
    tg = num3; 
    
    maths();
}
function maths() {
    var res = parseFloat(0);
    var res1 = parseFloat(0);

    if (sin != 0) {
        res = 1 - (sin ** 2);
        res = Math.sqrt(res);
        var resultDiv = document.getElementById("result");
        document.getElementById("input2").value = res;
        cos = res;

        res1 = sin / cos;
        document.getElementById("input3").value = res1;

        var htmlContent = "<h2>El Angulo es de  " + Math.asin(sin) + " grados</h2>";
        resultDiv.innerHTML = htmlContent;
    } 

    else if (cos != 0) {
            res = 1 - (cos ** 2);
            res = Math.sqrt(res);
            var resultDiv = document.getElementById("result");s
            document.getElementById("input1").value = res;

            sin = res;
            res1 = sin / cos;
            document.getElementById("input3").value = res1;

            var htmlContent = "<h2>El Angulo es de  " + Math.asin(sin) + " grados</h2>";
            resultDiv.innerHTML = htmlContent;
    } 

    else if ( cos != 0, sin != 0) {
        res = sin / cos;
        document.getElementById("input3").value = res;
        var resultDiv = document.getElementById("result");

        var htmlContent = "<h2>El Angulo es de  " + Math.asin(sin) + " grados</h2>";
        resultDiv.innerHTML = htmlContent;
    }
}       