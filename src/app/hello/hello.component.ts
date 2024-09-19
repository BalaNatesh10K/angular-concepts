import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [TestComponent],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent {
  // Same event handling that was did in app. component
  // Similar kind of event handling can be done in child and can be taken in Parent

  @Output()
  messageEvent = new EventEmitter();
  sendMessage() {
    this.messageEvent.emit('Message passed from hello component');
  }

  //In angular 18, @Input() decorator is used to pass data from parent component to child
  //component. @Input marks a property in the child component as a input, allowing the parent
  // component to bund data to it
  @Input() 
  name?:string;
}
