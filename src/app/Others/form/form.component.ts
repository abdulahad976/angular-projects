import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  jobApplicationForm: any;

  educationLevels = [
    'High School',
    'Associate Degree',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'Doctorate',
    'Professional Degree'
  ];

  skillCategories = [
    'Technical Skills',
    'Soft Skills',
    'Language Skills',
    'Design Skills',
    'Management Skills'
  ];

  proficiencyLevels = [
    'Beginner',
    'Intermediate',
    'Advanced',
    'Expert'
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.jobApplicationForm = this.fb.group({
      personalInfo: this.fb.group({
        firstName: ['', [
          Validators.required, 
          Validators.minLength(2), 
          Validators.maxLength(50)
        ]],
        lastName: ['', [
          Validators.required, 
          Validators.minLength(2), 
          Validators.maxLength(50)
        ]],
        email: ['', [
          Validators.required, 
          Validators.email
        ]],
        mobile: ['', [
          Validators.required, 
          Validators.pattern('^[0-9]{10}$')
        ]],
        alternatePhone: [''],
        linkedin: ['', Validators.pattern('^https?://www\\.linkedin\\.com/in/[A-Za-z0-9-]+/?$')],
        githubProfile: ['', Validators.pattern('^https?://github\\.com/[A-Za-z0-9-]+/?$')],
        
        address: this.fb.group({
          street: ['', Validators.required],
          street2: [''], 
          city: ['', Validators.required],
          state: ['', Validators.required],
          zipCode: ['', [
            Validators.required, 
            Validators.pattern('^[0-9]{5}$')
          ]]
        })
      }),

      education: this.fb.array([]),

      skills: this.fb.array([])
    });


    this.addEducationEntry();
    this.addSkillEntry();
  }

  get educationEntries() {
    return this.jobApplicationForm.get('education') as FormArray;
  }

  addEducationEntry() {
    const educationGroup = this.fb.group({
      level: ['', Validators.required],
      degreeName: ['', Validators.required],
      instituteName: ['', Validators.required],
      graduationYear: ['', [
        Validators.required, 
        Validators.min(1950), 
        Validators.max(new Date().getFullYear())
      ]],
      grade: ['', [
        Validators.required, 
        Validators.min(0), 
        Validators.max(100)
      ]],
      honors: [''] // Optional honors or achievements
    });

    this.educationEntries.push(educationGroup);
  }

  removeEducationEntry(index: number) {
    this.educationEntries.removeAt(index);
  }

  // Skills Form Array Methods
  get skillEntries() {
    return this.jobApplicationForm.get('skills') as FormArray;
  }

  addSkillEntry() {
    const skillGroup = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      proficiency: ['', Validators.required],
      yearsOfExperience: ['', [
        Validators.min(0), 
        Validators.max(50)
      ]],
      certification: [''] 
    });

    this.skillEntries.push(skillGroup);
  }

  removeSkillEntry(index: number) {
    this.skillEntries.removeAt(index);
  }

  onSubmit() {
    if (this.jobApplicationForm.valid) {
      console.log(this.jobApplicationForm.value);
    } else {
      this.markFormGroupTouched(this.jobApplicationForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}