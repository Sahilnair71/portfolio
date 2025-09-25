import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkExperience } from '../models/work-experience.model';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
  private dataUrl = 'assets/backend_data/workexperience.json';

  constructor(private http: HttpClient) { }

  getWorkExperience(): Observable<WorkExperience[]> {
    return this.http.get<WorkExperience[]>(this.dataUrl);
  }
}