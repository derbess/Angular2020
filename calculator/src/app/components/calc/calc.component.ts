import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {
  @Input() displayCur = "0";

  @Input() displayHist = " ";
  
  num1 = 0.0;
  num2 = 0.0;
  operation = "";
  dot = false;
  equalsPressed = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  handlePressKey(key: string) {
    console.log(key);

    if(key == 'CE') {
      this.displayCur = "0";
    }
    if(key == 'C') {

      this.displayCur = "0";
      this.displayHist = "";
      this.num1 = 0.0;
      this.num2 = 0.0;
      this.operation = "";
      this.dot = false;

    }
    if(key == 'back')
    {
      this.displayCur = this.displayCur.substring(0, this.displayCur.length - 1);
    }
    if(key == 'x^2')
    {
      this.displayCur = ((Number.parseFloat(this.displayCur)*(Number.parseFloat(this.displayCur))).toString());
      this.num1 = (Number.parseFloat(this.displayCur)*(Number.parseFloat(this.displayCur)));
      this.dot = false;

    }
    if(key == '1/x')
    {
      this.displayCur = (1/(Number.parseFloat(this.displayCur))).toString();
      this.num1 = (1/(Number.parseFloat(this.displayCur)));
      this.dot = false;
    }
    if(key == 'sqrt')
    {
      this.displayCur = (Math.sqrt(Number.parseFloat(this.displayCur))).toString();
      this.num1 = (Math.sqrt(Number.parseFloat(this.displayCur)));
      this.dot = false;
    }
    if(key == '±')
    {
      this.displayCur = (-1*Number.parseFloat(this.displayCur)).toString();
    }
    if(this.displayCur == '0' && key == '0'){}
    else if(this.displayCur == '0' && key == ',') {
      this.displayCur += key;
      this.dot = true;
    }
    else if(this.displayCur == '0' && (key == '1' || key == '2' || key == '3' || key == '4' || key == '5' || key == '6' || key == '7' || key == '8' || key == '9')) {
      this.displayCur = "";
      this.displayCur += key;
    }
    else if(key == ',' && !this.dot && this.displayCur)  
    {
      this.displayCur += key;
      this.dot = true;
    }
    else if(key == '0' || key == '1' || key == '2' || key == '3' || key == '4' || key == '5' || key == '6' || key == '7' || key == '8' || key == '9')
    {
      this.displayCur += key;
    }
    if(key == '+' || key == '*' || key == "/" || key == '-' )
    {
      this.operation = key;
      if(this.displayCur == '') {this.num1 = this.num1;}
      else this.num1 = Number.parseFloat(this.displayCur)
      console.log(this.num1);
      this.displayCur = "";
      this.dot = false;
      this.displayHist = this.num1.toString() + this.operation; /*`${this.num1}`*/
    }
    // if(this.operation)
    // {
    //   if(key == '%')
    //   {
    //     this.num2 = Number.parseFloat(this.displayCur);
    //     this.displayCur = "";
    //     this.displayHist += this.num2.toString();
    //   }
    // }
    if(key == '=')
    {
      if(this.operation && this.equalsPressed)
      {
        this.num2 = Number.parseFloat(this.displayCur);
        this.displayCur = "";
        this.displayHist += this.num2.toString();

        if(this.operation == '+')
        {
          this.displayCur = (this.num1 + this.num2).toString();
        }
        else if(this.operation == '*')
        {
          this.displayCur = (this.num1 * this.num2).toString();
        }
        else if(this.operation == '-')
        {
          this.displayCur = (this.num1 - this.num2).toString();
        }
        else if(this.operation == '/')
        {
          if(this.num2 == 0) console.log("Error");
          else this.displayCur = (this.num1 / this.num2).toString();
        }
        else if(this.operation == '')
        this.num1 =  Number.parseFloat(this.displayCur);
      }
      this.equalsPressed = true;
    }
  }
}
