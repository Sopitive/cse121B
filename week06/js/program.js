/* 
This program will convert a simple if statement to a mathematical equation that will yield the result that depends on the
value of x. The first value of z will be the resulting value if x > 0, otherwise the value of z will be -20 if x < 0.
Since this currently uses the signum function, x cannot equal 0.


Example Code:
    function set_b( int b):int
    {
        if ( x > 0)
        {
        z = 5 ;
        }
        else
        if ( x < 0 )
        {
        z = -20 
        } 
    }

Example Solution:
    y = 5 / 2 * (5 * x / |x| − 3)

Find m,b such that y = m * x / |x| + b. You have two conditions thus two equations with two variables.

First Equation: 
    if x is greater than 0, then y = 5, else -20

Build First Equation:
    1. Plug in value for y when x is greater than 0. Plug in value for b when x is less than 0:
        5 = m * x / |x| -20
    
    2. Plug in value for x, the number if x is less than 0, use 1 for x:
        5 = m * x / |x| -20
        Format equation for program:
            m = 5 + 20
        Note: You could say that m = (y, y > 0) - (y, y < 0)
    3. Solve for y₁:
        m = 5 + 20
        m = 25
    Equation Solution:
        m = 25 * x / |x| + b

    Next, multiply the resulting number (m) if b > 0 by 2 and divide y₁ by it. You can also do all previous steps with substituted variables reversed:
        Example: 
            5 * 2 = 10 ---> 25 / 10
            -20 / 2 = -10 ---> -25 / -10 (-25 because if you plugged in the variables the opposite way above you get a negative number)
    Simplify:
        25 / 10 --> 5 / 2
    Equation so far:
        y = 5 / 2 * (5 * x / |x| + b)
    Substitute value for y when x is greater than 0:
        5 = 5 / 2 * (5 * x / |x| + b)
        b = 2 - 5
    Solve for b, using 1 for x (since we used the number for y when x is greater than 0):
        5 = (25 / 2 * 1) + 5b / 2
        5 = 25 / 2 + 5b / 2
        5 - 25 / 2 = 5b / 2
        10 - 25 = 5b
        -15 = 5b
        -3 = b 
    Completed Equation:
        y = 5 / 2 * (5 * x / |x| - 3)

*/


const decimalCount = num => {
    // Convert to String
    const numStr = String(num);
    // String Contains Decimal
    if (numStr.includes('.')) {
        return numStr.split('.')[1].length;
    };
    // String Does Not Contain Decimal
    return 0;
}

function convertIf(x_greater, x_lesser) {
    const first_result = x_greater;
    const second_result = x_lesser;
    let m = first_result - second_result;
    m = m / (first_result * 2);
    let numerator = 10 ** decimalCount(m) * m;
    let denominator = 10 ** decimalCount(m);
    const b = ((first_result * denominator) / numerator) - first_result;
    let plus_minus = "";
    if (b > 0){
        plus_minus = "+";
    }
    let equation_top = `${numerator}(${first_result}x ${plus_minus} ${b})`;
    let equation_bottom = `${denominator}(|x|)`;
    return [m, b, equation_top, equation_bottom];
}


function solveEquation(x, x_greater, x_lesser) {
    let array = convertIf(x_greater, x_lesser)
    let m = array[0];
    let b = array[1];
    console.log(m);
    //console.log(m * (x_greater * (Math.abs(x) / x) + b));
    return m * (x_greater * (Math.abs(x) / x) + b);
}

//console.log(Math.round(solveEquation(-2, -100, -40))); //Have to round it because JavaScript converts it to a decimal.

const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");
const solved = document.querySelector(".solved");
let inputs = document.getElementsByClassName("input");

for (let i of inputs) {
    i.addEventListener("input", function () {
        let equation = convertIf(inputs[1].value, inputs[2].value);
        result1.innerHTML = equation[2];
        result2.innerHTML = equation[3];
        console.log(inputs[1])
        solved.innerHTML = "Result: " + Math.round(solveEquation(inputs[0].value, inputs[1].value, inputs[2].value));
    })
}