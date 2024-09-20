import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})

//This directive wherever used will make the text in yellow color
//ElementRef and Renderer is used to set the View
export class HighlightDirective {

  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'background-color' , 'yellow');
   }

}
