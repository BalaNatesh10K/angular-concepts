import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-controls',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-controls.component.html',
  styleUrl: './form-controls.component.css'
})
export class FormControlsComponent {
  myControl = new FormControl('default value');
  myControlWithDefault = new FormControl('default value', {
    initialValueIsDefault:true
  });

  /**
   * In Angular, a FormControl object has several properties that allow you to interact with and
   * manage the state of a form control. Here are six important one:
   * 
   * 1. value

    Description: This property holds the current value of the control.
    Example: If a user types "John" into an input field, formControl.value would return "John".

2. valid

    Description: This boolean property indicates whether the control is valid based on the defined validators.
    Example: If the control is correctly filled according to the validation rules, formControl.valid would be true; otherwise, it would be false.

3. invalid

    Description: This boolean property is the opposite of valid. It indicates whether the control is invalid.
    Example: If the input field is empty (and required), formControl.invalid would be true.

4. touched

    Description: This boolean property indicates whether the control has been touched (focused and then blurred).
    Example: If the user clicks on the input field and then clicks away without entering any value, formControl.touched would be true.

5. dirty

    Description: This boolean property indicates whether the control's value has changed from its initial value.
    Example: If the input field initially has an empty value and the user types something, formControl.dirty would be true.

6. errors

    Description: This property holds an object containing any validation errors related to the control. If there are no errors, it is null.
    Example: If the control has a required validator and the user submits an empty field, formControl.errors might return { required: true }.
   */
}
