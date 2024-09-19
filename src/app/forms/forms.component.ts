import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  NgForm,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {
  title: string = 'Angular Forms';
  contactForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createContactForm();
  }

  createContactForm() {
    this.contactForm = this.formBuilder.group({
      fullname: [''],
      email: [''],
      message: [''],
    });
  }

  onSubmit() {
    console.log('Your form data: ', this.contactForm.value);
  }

  onSubmit2(form: NgForm) {
    console.log('Your form data: ', form.value);
  }
}
