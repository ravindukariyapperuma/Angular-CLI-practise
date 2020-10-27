import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<div>
                Welcome {{name}}
              </div>
              <h2 class="text-success">Sri Lanka</h2>
              <h2 [class]="successClass">Sri Lanka</h2>
              <h2 class="text-special" [class]="successClass">Sri Lanka</h2>
              <h2 [class.text-danger]="hasError">Sri Lanka</h2>
              <h2 [ngClass]="messageClasses">Sri Lanka</h2>
  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Lakshan";
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
