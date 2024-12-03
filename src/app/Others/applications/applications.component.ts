import { Component, OnInit } from '@angular/core';
import { JobApplication } from '../../Models/job-applications.interface';
import { JobStorageService } from '../../services/JobStorage/job-storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.scss'
})
export class ApplicationsComponent implements OnInit {
  applications: JobApplication[] = [];

  constructor(private jobStorageService: JobStorageService) {}

  ngOnInit(): void {
    this.applications = this.jobStorageService.getApplications();
    console.log(this.applications);
  }

  deleteApplication(index: number): void {
    if (confirm('Are you sure you want to delete this application?')) {
      this.applications.splice(index, 1);
      this.jobStorageService.saveAllApplications(this.applications);
    }
  }

  deleteAllApplications(): void {
    if (confirm('Are you sure you want to delete all applications?')) {
      this.applications = [];
      this.jobStorageService.clearApplications();
    }
  }

  
}
