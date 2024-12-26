import { CommonModule, NgIf } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ApisIntegrationService } from '../../services/apiIntegration/apis-integration.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  userApiService = inject(ApisIntegrationService)

 @Input() public isLogin = false;

 public signupFormData = []

  toggleToLogin() {
    this.isLogin = true;
  }

  toggleToSignup() {
    this.isLogin = false;
  }


  signUpForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[a-zA-Z\s]+$/)  // Only letters and spaces
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/) // Password must have at least one uppercase, one lowercase, and one number
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),  
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{10}$/) // Phone number must be 10 digits
    ]),
    dob: new FormControl(''),
    gender: new FormControl('', [
      Validators.required
    ]),
    address: new FormControl('', [
      Validators.required
    ]),
    country: new FormControl('Pakistan', [
      Validators.required
    ]),
    city: new FormControl('', [
      Validators.required
    ]),
    region: new FormControl('', [
      Validators.required
    ]),
    postal: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{5}$/) // Postal code should be 5 digits
    ])
  }, {
    validators: this.passwordMatchValidator
  });

  
  passwordMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const passwordControl = formGroup.get('password');
      const confirmPasswordControl = formGroup.get('confirmPassword');
  
      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }
  
      if (passwordControl.value !== confirmPasswordControl.value) {
        return { notEquivalent: true };
      }
  
      return null;
    };
  }
  

  loginForm : FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })


  onSignUpSubmit() {
    if (this.signUpForm.invalid) {
      alert('Please fill in all required fields.');
      return;
    }
  
    this.signupFormData = this.signUpForm.value;
  
    this.userApiService.addUser(this.signupFormData).subscribe({
      next: (response) => {
        console.log('Data posted successfully:', response);
        alert('User signed up successfully!');
        
        this.signUpForm.reset();
      },
      error: (error) => {
        console.error('Error posting data:', error);
        alert('An error occurred while signing up. Please try again.');
      },
    });
  }
  

}
