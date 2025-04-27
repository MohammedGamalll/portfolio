import { ToastrService } from 'ngx-toastr';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor() {}
  successMessage: string = '';
  errorMessage: string = '';
  isloading: boolean = false;
  toastr = inject(ToastrService);

  fb = inject(FormBuilder);
  myForm: FormGroup = this.fb.group({
    name: [
      null,
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    email: [null, [Validators.required, Validators.email]],
    message: [
      null,
      [Validators.required, Validators.minLength(5), Validators.maxLength(500)],
    ],
  });

  onSubmit() {
    this.isloading = true;
    console.log('Form submitted!');
    console.log(this.myForm.value);
    emailjs.init('Xd_slvoTRLg5bW4JK');
    emailjs
      .send('service_kzpy9ee', 'template_38wmaza', {
        title: 'Portfolio Contact Form',
        name: this.myForm.value.name,
        message: this.myForm.value.message,
        email: this.myForm.value.email,
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          this.successMessage = 'Email sent successfully!';
          this.isloading = false;
          this.toastr.success(this.successMessage, 'Success');
          this.myForm.reset();
        },
        (err) => {
          console.log('FAILED...', err);
          this.errorMessage = 'Failed to send email. Please try again later.';
          this.isloading = false;
          this.toastr.error(this.errorMessage, 'Error');
          this.myForm.reset();
        }
      );
  }
}
