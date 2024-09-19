import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormArray,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-form-arrays',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, CommonModule],
  templateUrl: './form-arrays.component.html',
  styleUrl: './form-arrays.component.css',
})
export class FormArraysComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      myArray: this.fb.array([]),
    });
  }

  addControl():void {
    const control = this.fb.control('');
    (this.myForm.get('myArray') as FormArray).push(control);
  }

  removeControl(index: number) {
    (this.myForm.get('myArray') as FormArray).removeAt(index);
  }
}
