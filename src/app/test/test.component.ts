import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<div>
                Welcome {{name}}
              </div>
              <input [id]="myId" type="text" value="Ravindu">
              <input bind-disabled="isDisabled" id={{myId}} type="text" value="Ravindu">
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Lakshan";
  public myId = "testId";
  public isDisabled = false;
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
