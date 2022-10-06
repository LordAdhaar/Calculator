
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

console.log(add(1,2),subtract(1,2),multiply(2,3),divide(10,3));

function operate(operator, a, b){

    if(operator===null){
        return;
    }

    a=+a;
    b=+b;

    if (operator === "+"){
        return add(a,b);
    }
    else if (operator === "-"){
        return subtract(a,b);
    }
    else if (operator==="*"){
        return multiply(a,b);
    }
    else{

        if(b===0){
            return 8008135;
        }

        return divide(a,b);
    }
}

console.log(operate("-",12,5));

const subRes = document.querySelector(".subRes h3");
const finRes = document.querySelector(".finRes h1");
let subResDisplayValue  = subRes.textContent;
let finResDisplayValue = finRes.textContent;
let operator = null;
let indexOfOperator;
let a;
let b;
let allOperators = ["+","-","*","/"];
let count = 0;


const buttons = document.querySelectorAll(".keys button");

console.log(buttons);

function change_subRes(){
    
    console.log(this);

    if(this.textContent === "CLEAR"){
        subResDisplayValue = "";
        finResDisplayValue = "0";
        subRes.textContent = subResDisplayValue;
        finRes.textContent = finResDisplayValue;
        count=0;
    }
    else if (this.textContent === "DELETE"){

        let myArray = finResDisplayValue.split("");
        myArray.pop();
        finResDisplayValue = myArray.join("");
        finRes.textContent = finResDisplayValue;

        let subResArray = subResDisplayValue.split("");
        subResArray.pop();
        subResDisplayValue = subResArray.join("");
        console.log(subResDisplayValue);
    }
    else if(this.textContent === "+" || this.textContent==="-" || this.textContent==="/" || this.textContent==="*"){

        for(let operation of allOperators){
            console.log(subResDisplayValue.charAt(subResDisplayValue.length-1)) ;
            if (subResDisplayValue.charAt(subResDisplayValue.length-1)===operation){
                return;
            }
        }

        if(count === 0){
            operator= this.textContent;
            subResDisplayValue = finResDisplayValue + operator;
            subRes.textContent = subResDisplayValue;
            indexOfOperator = subResDisplayValue.indexOf(operator);
            count+=1;
        }
        else{
            let array = subResDisplayValue.split(operator);
            console.log(array);
            a = array[0];
            b = array[1];
            console.log(count);
            let result = operate(operator,a,b);

            operator = this.textContent;
            subResDisplayValue = result+ operator;
            subRes.textContent = subResDisplayValue;

            finResDisplayValue = result;
            finRes.textContent = finResDisplayValue;

            indexOfOperator = subResDisplayValue.indexOf(operator);

            count+=1;

        }
    }
    else if (this.textContent==="="){

        for(let operation of allOperators){
            console.log(subResDisplayValue.charAt(subResDisplayValue.length-1)) ;
            if (subResDisplayValue.charAt(subResDisplayValue.length-1)===operation || subResDisplayValue.charAt(subResDisplayValue.length-1)==="=" || subResDisplayValue === "" || operator === null){
                return;
            }
        }

        a = subResDisplayValue.slice(0,indexOfOperator);
        b = subResDisplayValue.slice(indexOfOperator+1);

        subResDisplayValue += this.textContent;
        subRes.textContent = subResDisplayValue;

        finResDisplayValue = `${operate(operator,a,b)}`;
        finRes.textContent = finResDisplayValue;

        count = 0;
    }
    else{

        for(let operation of allOperators){
            if (subResDisplayValue.charAt(subResDisplayValue.length-1)===operation){
                finResDisplayValue = "";
                finRes.textContent = finResDisplayValue;
            }
        }

        if(finResDisplayValue==="0"){
            finResDisplayValue="";
            finRes.textContent = finResDisplayValue;
        }

        finResDisplayValue += this.textContent;
        subResDisplayValue += this.textContent;
        console.log(finResDisplayValue);
        console.log(subResDisplayValue);
        finRes.textContent = finResDisplayValue;
    }
}

for(let button of buttons){
    button.addEventListener("click",change_subRes);
}