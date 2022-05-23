function calculation(){
    
    let num1 =Number (prompt("Enter the num1: "));
    let num2 =Number (prompt("Enter the num2: "));
    
    document.getElementById("results").
    innerHTML=`
    <p> ${num1} + ${num2} = ${sum(num1,num2)} </p>
    <p> Sub ${num1} - ${num2} = ${subtraction(num1,num2)}</p>
    <p> Multi ${num1} * ${num2} = ${multi(num1,num2)}</p>
    <p> Div ${num1} / ${num2} = ${div(num1,num2)}</p>
    `;
}

function sum(a,b){
    return a+b;


}
function subtraction(a,b){
    return a-b;
}
function multi(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}