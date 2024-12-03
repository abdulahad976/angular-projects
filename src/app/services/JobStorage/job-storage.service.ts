import { Injectable } from '@angular/core';
import { JobApplication } from '../../Models/job-applications.interface';

@Injectable({
  providedIn: 'root'
})
export class JobStorageService {

  constructor() { }

  private readonly localStorageKey = 'jobApplications';

  saveApplication(data: JobApplication): void {
    const currentData = this.getApplications();
    currentData.push(data);
    localStorage.setItem(this.localStorageKey, JSON.stringify(currentData));

  }

  getApplications(): JobApplication[] {
    const storedData = localStorage.getItem(this.localStorageKey);
    return storedData ? JSON.parse(storedData) : [];
  }
  clearApplications(): void {
    localStorage.removeItem(this.localStorageKey);
  }

  saveAllApplications(data: JobApplication[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(data));
  }
}
