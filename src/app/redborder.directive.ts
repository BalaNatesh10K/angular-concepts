import { Directive, Host, HostBinding } from '@angular/core';

@Directive({
  selector: '[appRedborder]',
  standalone: true,
})
export class RedborderDirective {
  //@HostBinding('value') myValue is same exactly as [value] = "myValue"(Property Binding Concept)
  @HostBinding('style.border')
  border = '2px solid red';
}
