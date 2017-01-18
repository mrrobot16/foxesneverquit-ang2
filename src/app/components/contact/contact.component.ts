import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CustomValidators from '../forms/CustomValidators';

@Component({
  selector: 'app-contact',
  template: `
  <h2>Contact Reactive Form</h2>

  <form (ngSubmit)="submitForm()" [formGroup]="contactForm" novalidate>
    <div class="form-content">
      <label>
        Name:
        <input type="text" formControlName="name" class="sd-form-control" placeholder="Enter your name.">
      </label>
      <label>
        Email:
        <input type="email" formControlName="email" class="sd-form-control" placeholder="Enter your email.">
      </label>
      <label>
        Content:
        <textarea formControlName="content" class="sd-form-control" placeholder="Content here."></textarea>
      </label>
      <div class="form-submit">
        <button type="submit">Submit</button>
      </div>
    </div>
  </form>

  <div class="form-value">
    Form value:
    <pre>
      {{contactForm.value | json}}
    </pre>
    <p>
      Status: {{contactForm.status}}
    </p>
    <p>
      Valid: {{contactForm.valid}}
    </p>
    <p>Submit then open console to see full form.</p>
  </div>
  `,
  styleUrls: ['./contact-component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, CustomValidators.validateEmail]],
      content: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  submitForm(): void {
    console.log(this.contactForm);
  }
}
