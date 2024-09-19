import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { VariableBinding } from '@angular/compiler';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, NgFor, NgIf, FormsModule, 
    NgSwitch, NgSwitchDefault, NgSwitchCase],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  //ngModel is used for 2-way data binding - we used [(ngModel)] in the HTML file

  showMe: boolean = true; //variable created to understand if condition in angular

  num: number = 0; // variable created to understand ngSwitch

  title = 'power of Data Binding'; // Created to understand {{}} - databinding

  items = ['Item1', 'Item2', 'Item3']; // variable created to understand ngFor

  @Output()
  customEvent = new EventEmitter<void>();

  emitCustomEvent(){
    this.customEvent.emit();
    console.log("Event emitted by a button");
  }

  recievedMessage? : string;

  recieveMessage(message : string){
    this.recievedMessage = message;
  }

  btnClicked($event : any){
    console.log($event);
    alert("Button Clicked");
  }

  //@Input decorator is used to mark the name property as an input
  //Parent passes the value of variableDeclaredInParent to child component's name input
  //using property binding
  variableDeclaredInParent = "ABC XYZ";

  // [] - array, {} - object
  arrayOfObjects = [{name: 'A', value : 10},
    {name: 'B', value : 20},
    {name: 'C', value : 30},
    {name: 'D', value : 40},
    {name: 'E', value : 50},
  ];

  selectValue?: string;
 
}
