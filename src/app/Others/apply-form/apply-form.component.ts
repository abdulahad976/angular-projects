import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-apply-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apply-form.component.html',
  styleUrl: './apply-form.component.scss'
})
export class ApplyFormComponent {
  @Input() public jobTitle = 'Full Stack Web Developer';
  @Input() public jobDescription = 'We are seeking a highly skilled AI Full Stack Developer to join our dynamic team. This role involves designing and developing innovative AI solutions that enhance our healthcare applications.';
  @Input() public jobRequirements = [
    'BS/MS degree in Computer Science, Engineering or a related subject',
    'Contribute in all phases of the development life cycle',
    'Develop and deploy new features to facilitate related procedures and tools',
    'Designing the application according to specifications',
    'Write well designed, testable, efficient code',
    'Integrate data from various back-end services and databases',
    'Be responsible for maintaining, expanding, and scaling our site',
    'Stay plugged into emerging technologies/industry trends'
  ];
  @Input() public jobSkills = ['MongoDB', 'Express', 'React', 'NodeJS', 'Communication', 'Problem Solving'];
  @Input() public jobType = ['Full Time', 'Remote'];
  @Input() public jobBenefits = ['Health Insurance', 'Paid Time Off', 'Performance Bonuses','Good Salary Package', 'Flexible Work Hours'];
  @Input() public aboutJobVenture = 'Our company specializes in building AI-powered solutions for healthcare, driving innovation in patient care and system efficiency.';
}