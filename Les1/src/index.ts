import { questionInt, question } from "readline-sync";

type Parts<T> = Partial<T>[];

class Calculator {
    constructor(...parts: Parts<Calculator>) {
        Object.assign(this, ...parts);
    }
    a: number;
    b: number;
    
    sum() {
        return this.a + this.b;
      }
    
    subsrt() {
        return this.a - this.b;
    }

    multiply() {
        return this.a * this.b;
    }

    division() {
        if(this.b == 0) return "Cant divide by zero";
        return this.a / this.b;
    }


}
const num1 = questionInt("Enter first number: ");
const num2 = questionInt("Enter second number: ");
const operation = question("Enter operation: ");


const t = new Calculator({a: num1, b: num2});
// t.a = num1;
// t.b = num2;
// let operation = "+";

if(operation == "+") console.log(t.sum());
else if (operation =="-") console.log(t.subsrt());
else if (operation =="*") console.log(t.multiply());
else if (operation =="/") console.log(t.division());
